import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaTimes } from "react-icons/fa";

export const MovieCard = ({ movie = {}, func, showDelete, handleOnClear }) => {
  console.log(movie);

  const { Poster, Title, Year, imdbRating, Plot, imdbID } = movie;
  return (
    <Card style={{ width: "18rem", marginTop: "10px" }} className="movie-card">
      <Card.Img variant="top" src={Poster} />
      <Card.Body>
        <Card.Title>{Title}</Card.Title>
        <Card.Text className="fw-bold">
          <div> Released: {Year}</div>
          <div> Rating: {imdbRating}</div>
          <div> {Plot}</div>
        </Card.Text>
        {showDelete ? (
          <div className="d-grid">
            <Button onClick={() => func(imdbID)} variant="danger">
              {" "}
              Delete{" "}
            </Button>
          </div>
        ) : (
          <div className="d-flex justify-content-between">
            <Button onClick={() => func("happy")} variant="success">
              Happy
            </Button>
            <span className="icon" onClick={handleOnClear} variant="primary">
              <i class="fa-solid fa-circle-xmark"></i>
            </span>
            <Button onClick={() => func("lazy")} variant="warning">
              Sad{" "}
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};
