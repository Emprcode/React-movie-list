import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Alert, Button } from "react-bootstrap";
import { MovieCard } from "./MovieCard";
import { useState } from "react";
import { fetchData } from "../utilities/AxiosHelpers";

export const SearchForm = () => {
  const [form, setForm] = useState("");
  const [movie, setMovie] = useState({});
  const [error, setError] = useState("");
  // get the form data while

  const handleOnChange = (e) => {
    const { value } = e.target;
    setForm(value);
  };
  // when form is submitted , call the api  with the search data and get the movie details
  const handleOnSubmit = async (e) => {
    e.preventDefault();

    error && setError("");
    movie.imdbID && setMovie({});

    // sync code:
    // fetchData(form).then((resp) => {
    //   console.log(resp.data);
    // });

    // async code
    try {
      const resp = await fetchData(form);
      // console.log(resp.data);
      if (resp.data.Response === "True") {
        setMovie(resp.data);
      } else {
        setError(resp.data.Error);
      }
    } catch (error) {
      console.log(error);
      setError("Error occurred");
    }
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
        {movie.imdbID && <MovieCard movie={movie} />}
        {error && <Alert variant="danger">{error}</Alert>}
      </Row>
    </Form>
  );
};
