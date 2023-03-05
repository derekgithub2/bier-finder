import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import "./Form.css";
import states from "./states";

const Form = ({setSearch}) => {
  const [userChoice, setUserChoice] = useState("");
  const navigate = useNavigate()

  const handleChange = (e) => {
    e.preventDefault();
    setUserChoice(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setSearch(userChoice);
    navigate('/search')
  };

  const stateList = states.map((state) => {
    return <option key={state}>{state}</option>;
  });

  return (
    <div>
      <form className="form">
        <input
          type="text"
          placeholder="Search..."
          className="input-field"
          list="dropdown-menu"
          value={userChoice}
          onChange={handleChange}
          required
        ></input>
        <datalist id="dropdown-menu">{stateList}</datalist>
        <div>
          <button onClick={handleClick} type="submit">
            Go!
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
