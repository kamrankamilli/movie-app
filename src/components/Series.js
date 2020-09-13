import React, { useState, useEffect } from "react";
import {
  Modal,
  Spinner,
  Row,
  Col,
} from "react-bootstrap";
import SearchBox from "./SearchBox";
import MovieCards from "./MovieCards.js";
import Footer from "./Footer"
import Detail from "./Details"
const API_KEY = "ce428231";
function Series() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [q, setQuery] = useState("Game");
  const [activateModal, setActivateModal] = useState(false);
  const [detail, setShowDetail] = useState(false);
  const [detailRequest, setDetailRequest] = useState(false);
  const [year, setYear] = useState("");
  // const [type, setType] = useState("");
  const [season, setSeason] = useState("1");
  const [episode, setEpisode] = useState("");
  const handleSubmit = (
    searchValue,
    yearValue,
    typeValue,  
    seasonValue,
    episodeValue
  ) => {
    setQuery(searchValue);
    setYear(yearValue);
    // setType(typeValue);
    setSeason(seasonValue);
    setEpisode(episodeValue);
  };
  useEffect(() => {
    setLoading(true);
    setError(null);
    setData(null);
    fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&t=${q}&Season=${season}&y=${year}`
    )
      .then((resp) => resp)
      .then((resp) => resp.json())
      .then((response) => {
        if (response.Response === "False") {
          setError(response.Error);
        } else {
          setData(response.Episodes);
          console.log(data);
          console.log(episode);
          console.log(season);
        }
        setLoading(false);
      })
      .catch(({ message }) => {
        setError(message);
        setLoading(false);
      });
  }, [q, year,season,episode]);
  return(
  <div>
    <div className="maincontainer">
      <Row>
        <Col>
          <SearchBox onSubmit={handleSubmit}/>
        </Col>
      </Row>
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
export default Series;
