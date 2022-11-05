import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";

export const Buttons = () => {
  return (
    <div>
      <ButtonGroup>
        <Button variant="primary">All</Button>
        <Button variant="success">Happy</Button>
        <Button variant="warning">Lazy</Button>
      </ButtonGroup>
    </div>
  );
};
