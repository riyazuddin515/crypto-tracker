import { Container } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { coinsListApi } from '../../config/apis'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useNavigate } from 'react-router-dom';

const Trending = () => {

    const [coins, setCoins] = useState([])
    const [loading, setLoading] = useState(false)
    const navigation = useNavigate()

    const [search, setSearch] = useState("")

    useEffect(() => {
        const getCoins = async () => {
            setLoading(true)
            const res = await axios.get(coinsListApi('inr'))
            setCoins(res.data)
            setLoading(false)
        }
        getCoins()
    }, [])

    const handleSearch = () => {
        return coins.filter((coin) =>
            coin.name.toLowerCase().includes(search.toLowerCase()) ||
            coin.symbol.toLowerCase().includes(search.toLowerCase())
        )
    }

    return (
        <Container>
            <h1 style={{ textAlign: 'center', margin: '30px 0px' }}>Crytocurrency Prices by Market Cap</h1>
            <input type="text" name="" id="" placeholder='Search for a crypto currency'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={
                    {
                        width: '100%', height: '30px',
                        margin: '20px 0px', padding: '20px',
                        fontSize: '20px', outline: 'none'
                    }
                } />
            <TableContainer>
                {
                    !loading ?
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead style={{ backgroundColor: 'gold', color: 'white' }}>
                                <TableRow>
                                    <TableCell>Coin</TableCell>
                                    <TableCell align="right">Price</TableCell>
                                    <TableCell align="right">24h&nbsp;change</TableCell>
                                    <TableCell align="right">Market&nbsp;cap</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody style={{ backgroundColor: 'transparent', color: 'white' }}>
                                {handleSearch().map(coin => (
                                    <TableRow
                                        onClick={() => navigation(`/coin/${coin.id}`)}
                                        key={coin.id}
                                        sx={{
                                            '&:last-child td, &:last-child th': { border: 0 },
                                            '&:hover': { backgroundColor: 'rgb(107, 107, 107)' }, cursor: 'pointer'
                                        }}
                                    >
                                        <TableCell component="th" scope="row" style={{ color: 'white', display: 'flex', alignItems: 'center' }}>
                                            <img src={coin.image} alt="" style={{ height: '50px', marginRight: '10px' }} />
                                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                <span>{coin.symbol.toUpperCase()}</span>
                                                <span>{coin.name}</span>
                                            </div>
                                        </TableCell>
                                        <TableCell align="right" style={{ color: 'white' }}>{coin.current_price}</TableCell>
                                        <TableCell align="right" style={{ color: 'white' }}>
                                            {coin.market_cap_change_percentage_24h >= 0 ?
                                                <span style={{ color: 'lightgreen' }}>+{coin.market_cap_change_percentage_24h.toFixed(2)}%</span> :
                                                <span style={{ color: 'red' }}>{coin.market_cap_change_percentage_24h.toFixed(2)}%</span>}
                                        </TableCell>
                                        <TableCell align="right" style={{ color: 'white' }}>{coin.market_cap}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        :
                        <h2>Loading</h2>
                }
            </TableContainer>

        </Container>
    )
}

export default Trending
