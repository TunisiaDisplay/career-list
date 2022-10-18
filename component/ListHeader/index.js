import { useState } from 'react';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

import InputLabel from '@mui/material/InputLabel';

import Style from './ListHeader.module.css';


const ListHeader = () => {

    const [geography, setGeography] = useState('location');
    const [engineering, setEngineering] = useState('geography');

    const handleGeographyChange = (event) => {
        setGeography(event.target.value);
    }

    const handleEngineeringChange = (event) => {
        setEngineering(event.target.value);
    }

    return (
        <div className={Style.container}>
            <div className={Style.part_1}>
                <TextField
                    id="outlined-basic"
                    label="Outlined"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                    variant="outlined" />

                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    id="demo-simple-select"
                    labelId="demo-simple-select-label"
                    value={geography}
                    label="geography"
                    onChange={handleGeographyChange}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>


                <Select
                    id="demo-simple-select2"
                    value={engineering}
                    label="Engineering"
                    onChange={handleEngineeringChange}
                >
                    <MenuItem value={10}>e 1 </MenuItem>
                    <MenuItem value={20}>e 2</MenuItem>
                    <MenuItem value={30}>e 3</MenuItem>
                </Select>

                <IconButton color="primary" variant="contained">
                    <SearchIcon />
                </IconButton>
            </div>

            <Select
                id="demo-simple-select3"
                value={engineering}
                label="Engineering"
                onChange={handleEngineeringChange}
            >
                <MenuItem value={10}>e 1 </MenuItem>
                <MenuItem value={20}>e 2</MenuItem>
                <MenuItem value={30}>e 3</MenuItem>
            </Select>

            Quick Tags

            <div className={Style.tags}>
                <Button >Contained</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="contained" color='secondary'>Contained</Button>
                <Button variant="contained">Contained</Button>
            </div>

            <Button variant="contained">Submit a new ressources</Button>
        </div>
    );
}

export default ListHeader;