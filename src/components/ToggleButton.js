import React, { useState } from "react";
import Movie from "./Movie";
import SearchByTitle from "./Series";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
const Toggle = () => {
  const [show, toggleShow] = useState(true);
  return (
    <>
      <ButtonGroup toggle className="buttonGroup mb-2">
        <ToggleButton
          className="toggleButton"
          type="checkbox"
          variant="dark"
          checked={show}
          value="1"
          onChange={() => toggleShow(!show)}
        >
          Search by: {show ? "TV-Series" : "Movies"}
        </ToggleButton>
      </ButtonGroup>
      {!show && (
        <div>
          <SearchByTitle />
        </div>
      )}
      {show && (
        <div>
          <Movie />
        </div>
      )}
    </>
  );
};
export default Toggle;
