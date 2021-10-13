import React from 'react'
import './searchBar.scss'
import Button from '@material-ui/core/Button';
import Box from '@mui/material/Box';
import TextField from '@material-ui/core/TextField';
import ArrowForwardIosOutlined from '@material-ui/icons/ArrowForwardIosOutlined';


let SearchBar = () => {

    return (<>
        <div className="search-container">

            <TextField id="outlined-basic fullWidth" label="Endereço IP" variant="filled" fullWidth label="fullWidth" id="txtField" />

            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            />
            <Button variant="contained" color="blacked">
                <ArrowForwardIosOutlined />
            </Button>
            
        </div>
    </>)
}

export default SearchBar;