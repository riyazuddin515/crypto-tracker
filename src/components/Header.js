import React, { useContext } from 'react'
import { Container } from '@mui/material'
import { CurrencyContext } from '../CurrencyContext'

const Header = () => {

    const currencyList = ["INR", "USD", "EUR"]
    const [currency, setCurrency] = useContext(CurrencyContext);

    return (
        <div style={{
            backgroundColor: 'black', display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '15px 0px',
            position: 'sticky', top: '0', zIndex: '999', borderBottom: '1px solid white'
        }}>
            <h1 style={{ color: 'gold' }}>Crypto Tracker</h1>
            <select name="currency" id="currency_id"
                onChange={(e) => setCurrency(e.target.value)}
                value={currency}
                style={{ width: '100px', fontSize: '20px', borderRadius: '5px', padding: '0px 5px' }}>
                {currencyList.map((each) => (
                    <option key={each} value={each}>{each}</option>
                ))}

            </select>

        </div>
    )
}

export default Header
