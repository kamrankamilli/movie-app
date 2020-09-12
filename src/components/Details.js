import React from "react";
import { Image } from "react-bootstrap";
import { Container, Row, Col, Badge } from "react-bootstrap";
const Detail = ({
  Title,
  Poster,
  imdbRating,
  Rated,
  Runtime,
  Genre,
  Plot,
  Actors,
  Director,
}) => {
  return (
    <Container>
      <Row>
        <Col>
          <Image
            style={{ width: "100%" }}
            src={
              Poster === "N/A"
                ? "https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg "
                : Poster
            }
            alt={Title}
          />
        </Col>
      </Row>
      <Row>
        <Col className="text-center" md={12}>
          <p className="title">{Title}</p>
        </Col>
      </Row>
      <Row>
        <Col style={{ marginBottom: "20px" }}>
          <h5>
            <Badge>{Rated}</Badge>
            <Badge>{Runtime}</Badge>
            <Badge>{Genre}</Badge>
          </h5>
        </Col>
        <Col style={{ textAlign: "right" }}>
          <h1>
            <span>
              <Badge variant="warning">{imdbRating}</Badge>
            </span>
          </h1>
        </Col>
      </Row>
      <Row>
        <Col className="text-center" md={12}>
          <h5>Directors</h5>
          <p>{Director}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h5 className="text-center" md={12}>
            Actors
          </h5>
          <p>{Actors}</p>
        </Col>
      </Row>
      <Row>
        <Col className="text-center" md={12}>
          <h4>About</h4>
          <p>{Plot}</p>
        </Col>
      </Row>
    </Container>
  );
};
export default Detail;
