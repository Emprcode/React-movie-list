import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const MovieCard = ({ movie = {}, func, showDelete }) => {
  console.log(movie);

  const { Poster, Title, Year, imdbRating, Plot, imdbID } = movie;
  return (
    <Card style={{ width: "18rem", marginTop: "10px" }}>
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
            <Button onClick={() => func("happy")} variant="primary">
              Happy
            </Button>
            <Button onClick={() => func("lazy")} variant="warning">
              Sad{" "}
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};
