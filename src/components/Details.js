import React from "react";
import { Image } from "react-bootstrap";
import { Container, Row, Col, Badge } from "react-bootstrap";
const Detail = ({ Title, Poster, imdbRating, Rated, Runtime, Genre, Plot, Actors, Director}) => {
  return (
    <Container>
      <Row>
        <Col>
          <Image
            style={{ width: "100%" }}
            src={
              Poster === "N/A"
                ? "https://placehold.it/198x264&text=Image+Not+Found"
                : Poster
            }
            alt={Title}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>{Title}</h3>
        </Col>
        <Col style={{ textAlign: "right" }}>
          <h1>
            <span>
              <Badge variant="warning">{imdbRating}</Badge>
            </span>
          </h1>
        </Col>
      </Row>
      <Row style={{ marginBottom: "20px" }}>
        <Col>
          <Badge>{Rated}</Badge>
          <Badge>{Runtime}</Badge>
          <Badge>{Genre}</Badge>
        </Col>
      </Row>
      <Row>
        <Col><h4>Directors:</h4><h5>{Director}</h5></Col>
      </Row>
      <Row>
        <Col><h4>Actors:</h4><h5>{Actors}</h5></Col>
      </Row>
      <Row>
        <Col><h4>About:</h4><p>{Plot}</p></Col>
      </Row>
    </Container>
  );
};
export default Detail;
