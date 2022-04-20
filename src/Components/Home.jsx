import { Component } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import books from "../Data/romance.json";

const Home = () => {
  return (
    <Container>
      <Row>
        {books.map((book) => (
          <Col md={3}>
            <Card key={book.asin}>
              <Card.Img variant="top" src={book.img} style={{ height: 300 }} />
              <Card.Body>
                <Card.Text>{book.title}</Card.Text>
                <Card.Title>{book.category}</Card.Title>
                <Button variant="primary">{book.price} €</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
