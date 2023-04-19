import { Container, Row, Col } from "react-bootstrap";

export default function About() {

    return(
        <main>
            <Container>
                <Row className="text-center">
                    <Col sm={12} md={6}>
                        <img src="https://picsum.photos/200/300" 
                            className="rounded-circle"
                            alt="Profile" />
                    </Col>
                    <Col>
                        <h1 className="mt-3">Véronie Cazeau</h1>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, amet explicabo! Quam adipisci voluptas qui earum illum recusandae, magnam ullam porro, assumenda sed laborum dolore dolor minus praesentium quas quisquam?</p>
                    </Col>
                </Row>
            </Container>
        </main>
    )
}