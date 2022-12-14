import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Alert, Button } from "react-bootstrap";
import { MovieCard } from "./MovieCard";
import { useEffect, useState } from "react";
import { fetchData } from "../utilities/AxiosHelpers";
import { randomChar } from "../utilities/randomGenerator";

export const SearchForm = ({ addMovie }) => {
  const [form, setForm] = useState("");
  const [movie, setMovie] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    const char = randomChar();
    console.log(char);

    const initialFetch = async () => {
      const resp = await fetchData(char);

      setMovie(resp.data);
    };
    initialFetch();
  }, []);
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

  const handleOnAdd = (cat) => {
    console.log(cat);
    addMovie({ ...movie, cat });
    setMovie({});
    setForm("");
  };

  const handleOnClear = () => {
    setMovie({});
  };

  return (
    <Form className="py-3" onSubmit={handleOnSubmit}>
      <Row>
        <Col></Col>
        <Col>
          <Form.Control
            value={form}
            onChange={handleOnChange}
            placeholder="Movie name"
            required
          />
        </Col>
        <Col>
          <Button type="submit"> Search </Button>
        </Col>
      </Row>
      <Row className="py-3 justify-content-center">
        {movie.imdbID && (
          <MovieCard
            movie={movie}
            func={handleOnAdd}
            handleOnClear={handleOnClear}
          />
        )}
        {error && <Alert variant="danger">{error}</Alert>}
      </Row>
    </Form>
  );
};
