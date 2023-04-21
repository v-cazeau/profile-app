import { Container, Row, Col } from "react-bootstrap";

export default function Quote() {

    return (
        <section>
            <Container className="quote-container">
                <Row className="text-center">
                    <Col>
                        <p><q> Hakuna Matata </q> -Timon & Pumba</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}