import React, { createContext, useState } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export let spin = createContext();

export default function Load(props) {
  const [spinner, setSpinner] = useState(true);

  return (
    <spin.Provider value={{ spinner, setSpinner }}>
      <Loader type="TailSpin" color="#00BFFF" height={35} width={35} {...props}>
        {props}
      </Loader>
    </spin.Provider>
  );
}
