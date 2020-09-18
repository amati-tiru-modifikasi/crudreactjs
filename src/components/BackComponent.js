import React from "react";
import { Row, Col, Button } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function BackComponent() {
  return (
    <Row>
      <Col>
        <Button color="dark" className="mb-2">
          <FontAwesomeIcon icon={faArrowLeft} />
          Back
        </Button>
      </Col>
    </Row>
  );
}
