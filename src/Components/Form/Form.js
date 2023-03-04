import React, { useState, useEffect } from "react";
import "./Form.css";
import states from "./states";

const Form = ({setSearch}) => {
  const [userChoice, setUserChoice] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setUserChoice(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setSearch(userChoice);
  };

  const stateList = states.map((state) => {
    return <option key={state}>{state}</option>;
  });

  return (
    <div>
      <form>
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
