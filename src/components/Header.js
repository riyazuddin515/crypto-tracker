import React, { useContext } from 'react'
import { Container } from '@mui/material'
import { CurrencyContext } from '../CurrencyContext'

const Header = () => {

    const currencyList = ["INR", "USD", "EUR"]
    const [currency, setCurrency] = useContext(CurrencyContext);

    return (
        <Container style={{ backgroundColor: 'black', display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '10px 0px' }}>
            <h2 style={{ color: 'gold' }}>Crypto Tracker</h2>
            <select name="currency" id="currency_id"
                onChange={(e) => setCurrency(e.target.value)}
                value={currency}
                style={{ width: '100px', fontSize: '20px', borderRadius: '5px', padding: '0px 5px' }}>
                {currencyList.map((each) => (
                    <option key={each} value={each}>{each}</option>
                ))}

            </select>

        </Container>
    )
}

export default Header
