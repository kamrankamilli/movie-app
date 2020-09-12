import React, { useState, useEffect } from "react";
import { Spinner, Row, Col, Modal } from "react-bootstrap";
import SearchBox from "./SearchBox";
import MovieCards from "./MovieCards";
import Detail from "./Details";
import Footer from "./Footer";

const API_KEY = "ce428231";

function Movie() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [q, setQuery] = useState("Avengers");
  const [activateModal, setActivateModal] = useState(false);
  const [detail, setShowDetail] = useState(false);
  const [detailRequest, setDetailRequest] = useState(false);
  const [year, setYear] = useState("");
  const [type, setType] = useState("");
  const handleSubmit = (searchValue, yearValue,typeValue) => {
    setQuery(searchValue);
    setYear(yearValue);
    setType(typeValue);
  };
  console.log();
  useEffect(() => {
    setLoading(true);
    setError(null);
    setData(null);
    console.log(q, year,type);
    fetch(`http://www.omdbapi.com/?y=${year}&apikey=${API_KEY}&s=${q}&type=${type}`)
      .then((resp) => resp)
      .then((resp) => resp.json())
      .then((response) => {
        if (response.Response === "False") {
          setError(response.Error);
        } else {
          setData(response.Search);
        }
        setLoading(false);
      })
      .catch(({ message }) => {
        setError(message);
        setLoading(false);
      });
  }, [q,year,type]);
  return (
    <div>
      <div className="maincontainer">
        <Row>
          <Col>
            <SearchBox onSubmit={handleSubmit} />
          </Col>
        </Row>
        <br />
        <Row>
          {loading && <Spinner className="spinner" animation="grow" />}

          {error !== null && <div style={{ margin: "20px 0" }}></div>}

          {data !== null &&
            data.length > 0 &&
            data.map((result, index) => (
              <MovieCards
                ShowDetail={setShowDetail}
                DetailRequest={setDetailRequest}
                ActivateModal={setActivateModal}
                key={index}
                {...result}
              />
            ))}
        </Row>
      </div>
      <Modal
        title="Detail"
        centered
        show={activateModal}
        onHide={() => setActivateModal(false)}
      >
        {detailRequest === false ? <Detail {...detail} /> : <Spinner />}
      </Modal>
      <Footer/>
    </div>
  );
}
export default Movie;
