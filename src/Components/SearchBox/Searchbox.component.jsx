import React from 'react';
import './searchbox.styles.css';

export const SearchBox =({placeholder,handeleChange}) => (
    <input className="searchbox" type="Search"
    placeholder={placeholder} 
    onChange= {handeleChange} />
);