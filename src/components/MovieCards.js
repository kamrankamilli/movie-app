import React from "react";
import { Col, Row, Card, Badge } from "react-bootstrap";
const API_KEY = "ce428231";
const MovieCards = ({
  Title,
  imdbID,
  Poster,
  Year,
  Type,
  ShowDetail,
  DetailRequest,
  ActivateModal,
  data
}) => {
  const clickHandler = () => {
    // Display Modal and Loading Icon
    ActivateModal(true);
    DetailRequest(false);

    fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}`)
      .then((resp) => resp)
      .then((resp) => resp.json())
      .then((response) => {
        DetailRequest(false);
        ShowDetail(response);

      })
      .catch(({ message }) => {
        DetailRequest(false);
      });
  };
  return (
    <Col style={{ margin: "20px 0" }}>
      <div>
        <Card style={{ width: "18rem" }} onClick={() => clickHandler()}>
          <Card.Img
            variant="top"
            src={
              Poster === "N/A"
                ? "https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg"
                : Poster
            }
          />
          <Card.Body>
            <Card.Title>{Title}</Card.Title>
            <Card.Text>
              <Row>
                <Col>
                  <Badge variant="warning">{imdbID}</Badge>
                </Col>
                <Col>
                  <Badge variant="dark">{Type}</Badge>
                </Col>
                <Col>
                  <Badge variant="dark">{Year}</Badge>
                </Col>
              </Row>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Col>
  );
};
export default MovieCards;
