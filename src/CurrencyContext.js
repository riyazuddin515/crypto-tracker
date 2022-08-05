import React, { useState, createContext } from 'react'

export const CurrencyContext = createContext()

export const CurrencyProvider = props => {
    const [currency, setCurrency] = useState("INR")
    return (
        <CurrencyContext.Provider value={[currency, setCurrency]} >
            {props.children}
        </CurrencyContext.Provider>
    );
}
