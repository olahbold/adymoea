import React from "react";
import { Card, Button } from "react-bootstrap";
export default function Cards() {
  return (
    <div>
      <Card
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          margin: "20px",
          padding: "10px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card.Img variant="top" src="Images\Image5.jpeg" />
        <Card.Body
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",

            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        <Card.Img variant="top" src="Images\Image5.jpeg" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        <Card.Img variant="top" src="Images\Image5.jpeg" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        <Card.Img variant="top" src="Images\Image5.jpeg" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
