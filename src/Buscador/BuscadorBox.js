import { IconButton, TextField } from "@material-ui/core";
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import  React, { useState } from "react";

const BuscadorBox = () => {
    const [searchTerm, setSearchTerm] = useState("");
    
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className="Buscador">
            <Link className="Logo" to="/"></Link>
            <TextField
                size="medium"
                className="Buscador__box"
                id="buscador"
                margin="normal"
                placeholder="Nunca dejes de buscar"
                value={searchTerm}
                onChange={handleChange}
            />
            <IconButton 
                className="Buscador__button"
                type="button" 
                aria-label="search" 
                to={`/items/search/${searchTerm}`} 
                component={Link} 
                disabled={searchTerm === ''}
            >
                <SearchIcon />
            </IconButton>
        </div>
    );
}

export default BuscadorBox;
