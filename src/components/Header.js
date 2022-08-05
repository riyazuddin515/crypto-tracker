import { Container } from '@mui/material'
import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Padding } from '@mui/icons-material';

const Header = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <Container style={{ backgroundColor: 'black', display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '10px 0px' }}>
            <h2 style={{ color: 'gold' }}>Crypto Tracker</h2>

        </Container>
    )
}

export default Header
