import React, { useState } from "react";
import {  Form, InputGroup } from "react-bootstrap";
import "../../styles/NavBar.css";
import { SearchButtonProps } from "../../models/Interfaces";

function SearchButton({onSearch}: SearchButtonProps) {
    const [query, setQuery] = useState('')

    const handleSearch = () => {
        onSearch(query)
    }

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if(e.key === 'Enter'){
        handleSearch();
      }
    }
  return (
    <InputGroup className="screen-space">    
      <Form.Control
        placeholder="Busca tu lugar..."
        value={query}
        onKeyDown={handleKeyPress}
        onChange={(e) => setQuery(e.target.value)}
        className="search-button"
      />    
    </InputGroup>
  );
}

export default SearchButton;
