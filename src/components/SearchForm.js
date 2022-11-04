import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Button } from "react-bootstrap";
import { MovieCard } from "./MovieCard";
import { useState } from "react";

export const SearchForm = () => {
  const [form, setForm] = useState("");
  // get the form data while

  const handleOnChange = (e) => {
    const { value } = e.target;
    setForm(value);
  };
  // when form is submitted , call the api  with the search data and get the movie details
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  // display movie data in  our UI
  return (
    <Form className="py-3" onSubmit={handleOnSubmit}>
      <Row>
        <Col></Col>
        <Col>
          <Form.Control onChange={handleOnChange} placeholder="Movie name" />
        </Col>
        <Col>
          <Button type="submit"> Search </Button>
        </Col>
      </Row>
      <Row className="py-3 justify-content-center">
        <MovieCard />
      </Row>
    </Form>
  );
};
