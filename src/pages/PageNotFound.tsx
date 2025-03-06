import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router";

const PageNotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container className="text-center mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h1 className="display-3 text-danger">404</h1>
          <h2 className="mb-3">Page Not Found</h2>
          <p className="text-muted">
            Sorry, the page you are looking for does not exist.
          </p>
          <Button variant="primary" onClick={() => navigate("/")}>
            Go to Home
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default PageNotFound;
