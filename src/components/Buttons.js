import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";

export const Buttons = ({ handleOnFilter }) => {
  return (
    <div>
      <ButtonGroup>
        <Button onClick={() => handleOnFilter("all")} variant="primary">
          All
        </Button>
        <Button onClick={() => handleOnFilter("happy")} variant="success">
        Happy
        </Button>
        <Button onClick={() => handleOnFilter("lazy")} variant="warning">
        Lazy
        </Button>
      </ButtonGroup>
    </div>
  );
};
