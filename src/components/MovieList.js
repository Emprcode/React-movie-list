import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { MovieCard } from "./MovieCard";
import { Buttons } from "./Buttons";

export const MovieList = ({ movies, handleOnDelete }) => {
  const [display, setDisplay] = useState([]);
  // console.log("before eddect")

  useEffect(() => {
    // console.log("from use effect");
    setDisplay(movies);
  }, [movies]);
  // pass props to square bracket if you wanna render components one time

  const handleOnFilter = (str) => {
    // console.log(str)

    str === "all"
      ? setDisplay(movies)
      : setDisplay(movies.filter((item) => item.cat === str));
  };

  return (
    <div className="mt-5 bg-dark p-3 rounded">
      <Row className="mt-5 bg-dark p-3 rounded">
        <Col>
          <Buttons handleOnFilter={handleOnFilter} />

          <div>{display.length} movies found</div>
        </Col>
      </Row>

      <Row>
        <Col className="mt-3 d-flex justify-content-around flex-wrap">
          {display.map((item) => (
            <MovieCard
              key={item.imdbID}
              movie={item}
              showDelete={true}
              func={handleOnDelete}
            />
          ))}
        </Col>
      </Row>
    </div>
  );
};
