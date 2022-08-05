import React, { useEffect, useState, useContext } from 'react'
import { CurrencyContext } from '../CurrencyContext';
import { TrendingApi } from '../config/apis'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Banner.css'
import axios from 'axios';

const Header = () => {

    const [currency, setCurrency] = useContext(CurrencyContext);
    const [trending, setTrending] = useState([])

    useEffect(() => {
        const fetchTreanding = async () => {
            const res = await axios.get(TrendingApi(currency))
            setTrending(res.data)
        }
        fetchTreanding()
    }, [currency])

    const handleDragStart = (e) => e.preventDefault();

    const items = trending.map(item => {
        return <div className='carousle-item' onDragStart={handleDragStart} >
            <img src={item.image} alt="" style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
            <div className='carousle-item-name-price'>
                <span className='symbol'>{item.symbol}</span>
                <span className='carousle-item-price'>
                    {item.market_cap_change_percentage_24h >= 0 ?
                        <span style={{ color: 'lightgreen' }}>+{item.market_cap_change_percentage_24h.toFixed(2)}%</span> :
                        <span style={{ color: 'red' }}>{item.market_cap_change_percentage_24h.toFixed(2)}%</span>}
                </span>
            </div>
            <b>{item.current_price}</b>
        </div>
    })

    const responsive = {
        0: {
            items: 1,
        },
        512: {
            items: 2
        },
        1024: {
            items: 5
        }
    }

    return (
        <div className='banner'>
            <h1>Crypto Tracker</h1>
            <p>Worlds leading crypto tracker</p>
            <AliceCarousel
                mouseTracking
                items={items}
                responsive={responsive}
                disableDotsControls
                // disableButtonsControls
                infinite
            // autoPlay
            />
        </div>
    )
}

export default Header
