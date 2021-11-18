import React from "react";
import "./searchBar.scss";
import Button from "../../node_modules/@material-ui/core/Button";
import TextField from "../../node_modules/@material-ui/core/TextField";

let SearchBar = (props) => {
  return (
    <>
      <div className="search-container">
        <TextField
          id="outlined-basic fullWidth textBar"
          className="txtField"
          label="Endereço IP"
          variant="filled"
          fullWidth
          onChange={props.getInputValue}
        />

        <Button
          variant="contained"
          className="btn-search"
          color="primary"
          onClick={() => {
            props.changeBTN();
            props.initApi();
          }}
        >
          {props.valueBtn}
        </Button>
      </div>
    </>
  );
};

export default SearchBar;
