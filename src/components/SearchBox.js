import React, { useState,useEffect } from "react";
import {
  Button,
  InputGroup,
  FormControl,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function SearchBox(props) {
  const [searchValue, setSearchValue] = useState("");
  const [yearValue, setYearValue] = useState("");
  const [typeValue, setTypeValue] = useState("");
  const getDropList = () => {
    const year = new Date().getFullYear();
    return Array.from(new Array(121), (v, i) => (
      <option key={i} value={year - i}>
        {year - i}
      </option>
    ));
  };
  function handleSubmit(){ 
     return props.onSubmit(searchValue, yearValue,typeValue)
  }
  const onKeyPress = (e) => {
    if(e.which === 13) {
      handleSubmit();
    }
  }
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <InputGroup className="mb-3">
              <FormControl
                onKeyPress = {onKeyPress}
                value={searchValue}
                type="text"
                name="searchValue"
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search by title"
                aria-describedby="basic-addon2"
              />
              <select
                value={yearValue}
                onChange={(e) => setYearValue(e.target.value)}
              >
                <option id="year" value="" selected>Year</option>
                <option  value=""></option>
                {getDropList()}
              </select>
              <select
                value={typeValue}
                onChange={(e) => setTypeValue(e.target.value)}
              >
                <option id="type" value="" selected>Year</option>
                <option  value=""></option>
                <option value="movie">Movie</option>
                <option value="series">Series</option>
                <option value="episode">
                  Episode
                </option>
              </select>
              <InputGroup.Append>
                <Button
                
                type="submit"
                  onClick={handleSubmit}
                  variant="dark"
                >
                  Search
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default SearchBox;
