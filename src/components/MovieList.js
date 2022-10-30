import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { MovieCard } from "./MovieCard";

export const MovieList = () => {
  return (
    <div className="mt-5 bg-dark p-3 rounded">
      <Row className="mt-5 bg-dark p-3 rounded">
        <Col>
          <DropdownButton
            as={ButtonGroup}
            title="Movies"
            id="bg-nested-dropdown">
            <Dropdown.Item eventKey="1">All</Dropdown.Item>
            <Dropdown.Item eventKey="2">Happy</Dropdown.Item>
            <Dropdown.Item eventKey="3">sad</Dropdown.Item>
          </DropdownButton>

          <div>10 Movies found</div>
        </Col>
      </Row>

      <Row>
        <Col className="mt-3 d-flex justify-content-around flex-wrap">
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </Col>
      </Row>
    </div>
  );
};
