import React from 'react';
import './searchbox.css';

const SearchBox = ({ onInputChange }) => {
    return (
        <div className="search-container">
            <input 
                onChange = {(event) => onInputChange(event.target.value)}
                className = "search-input" 
                placeholder = "Type keywords here" 
            />
        </div>
    )
}

export default SearchBox