import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Button } from "react-bootstrap";
import { MovieCard } from "./MovieCard";

export const SearchForm = () => {
  return (
    <Form>
      <Row>
        <Col></Col>
        <Col>
          <Form.Control placeholder="Movie name" />
        </Col>
        <Col>
          <Button> Search </Button>
        </Col>
      </Row>
      <Row className="py-3 justify-content-center">
        <MovieCard />
      </Row>
    </Form>
  );
};
