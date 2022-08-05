import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { CoinDetailsApi, CoinHistoricalChart } from '../../config/apis'
import "./Coin.css"
import { Line } from 'react-chartjs-2'
import Chart from 'chart.js/auto';
import { CircularProgress, LinearProgress } from '@mui/material'
import parse from 'html-react-parser';

const Coin = () => {
    const location = useLocation()
    const id = location.pathname.split('/')[2]

    const [coin, setCoin] = useState()
    useEffect(() => {
        const getCoinDetails = async () => {
            const res = await axios.get(CoinDetailsApi(id))
            setCoin(res.data)
            console.log(res.data)
        }
        getCoinDetails()
    }, [])

    const [days, setDays] = useState(1)
    const [historicalData, setHistoricalData] = useState([])
    useEffect(() => {
        const getHistoricalData = async () => {
            const res = await axios.get(CoinHistoricalChart(id, 'inr', days))
            setHistoricalData(res.data.prices)
        }
        getHistoricalData()
    }, [days])

    const handleChange = (val) => {
        setDays(val)
    }

    if (!coin) return <LinearProgress style={{ backgroundColor: 'gold' }} />

    return (
        <div className="coin-detail-container">

            <div className="coin-description">
                <div className='img'>
                    <img src={coin.image.large} alt="" />
                </div>
                <h2>{coin.name}</h2>
                <p>{parse(coin.description.en.split('. ')[0])}</p>
                <div className="lower-data">
                    <span> <b>Rank:</b> {coin.market_cap_rank} </span>
                    <span> <b>Current Price:</b> {coin.market_data.current_price.inr}</span>
                    <span> <b>Market Price:</b> {coin.market_data.market_cap.inr}</span>
                </div>
            </div>

            {!historicalData ?
                <CircularProgress />
                :
                <div className="coin-graph-histroy">
                    <Line
                        options={{
                            elements: {
                                line: {
                                    borderWidth: 2
                                },
                                point: {
                                    radius: 0

                                }
                            }
                        }}
                        data={{
                            labels: historicalData.map(item => {
                                let date = new Date(item[0])
                                let time = date.getHours() > 12 ?
                                    `${date.getHours() - 12}:${date.getMinutes()} PM` :
                                    `${date.getHours()}:${date.getMinutes()} AM`
                                return days === 1 ? time : date.toLocaleDateString();
                            }),
                            datasets: [{
                                label: `Price history of ${days} days.`,
                                data: historicalData.map((item) => item[1]),
                                borderColor: '#FFD700',
                                backgroundColor: '#FFD700',
                            }]
                        }}
                    />
                    <div className='change-buttons'>
                        <button className={days === 1 ? 'active' : 'inactive'} onClick={() => handleChange(1)}>24 Hours</button>
                        <button className={days === 30 ? 'active' : 'inactive'} onClick={() => handleChange(30)}>30 Days</button>
                        <button className={days === 90 ? 'active' : 'inactive'} onClick={() => handleChange(90)}>3 Months</button>
                        <button className={days === 365 ? 'active' : 'inactive'} onClick={() => handleChange(365)}>1 Year</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default Coin
