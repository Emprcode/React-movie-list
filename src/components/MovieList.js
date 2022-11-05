import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { MovieCard } from "./MovieCard";
import { Buttons } from "./Buttons";

export const MovieList = ({movies}) => {
  return (
    <div className="mt-5 bg-dark p-3 rounded">
      <Row className="mt-5 bg-dark p-3 rounded">
        <Col>
          <Buttons/>

          <div>{movies.length} movies found</div>
        </Col>
      </Row>

      <Row>
        <Col className="mt-3 d-flex justify-content-around flex-wrap">
          {
            movies.map((item) => <MovieCard key={item.imdbID} movie={item}/>)
          }
 </Col>
      </Row>
    </div>
  );
};
