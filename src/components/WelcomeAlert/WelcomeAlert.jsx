import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";

function WelcomeAlert() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Container fluid>
        <Alert show={show} variant="success">
          <Alert.Heading className="d-flex justify-content-center">
            Epibooks
          </Alert.Heading>
          <p className="d-flex justify-content-center">
            Tutti i libri che hai sempre sognato
          </p>
          <hr />
          <div className="d-flex justify-content-center">
            <Button onClick={() => setShow(false)} variant="outline-success">
              Close me
            </Button>
          </div>
        </Alert>
        <div className="d-flex justify-content-center">
          {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
        </div>
      </Container>
    </>
  );
}

export default WelcomeAlert;
