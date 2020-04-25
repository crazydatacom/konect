import React, { useState } from "react";
import { Container, FormControl } from "react-bootstrap";
import "../../styles/components/SearchBar/index.css";
import axios from "axios";

export const PROXYCORS = "https://cors-anywhere.herokuapp.com/";

const NavBar = (props) => {
  const [value, setValue] = useState("");

  const changeInput = (e) => {
    setValue(e.target.value);
  };
  const search = (e) => {
    axios
      .get(PROXYCORS + `https://coronabrainapi.herokuapp.com/search/${value}`)
      .then((res) => console.log(res.data))
      .catch(console.error);
  };

  return (
    <Container className="search-bar">
      <FormControl
        className="search-input"
        value={value}
        onChange={changeInput}
      />
      <span className="search-icon" onClick={search}>
        <i class="fas fa-search"></i>
      </span>
    </Container>
  );
};

export default NavBar;
