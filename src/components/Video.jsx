import { Container, Row, Col } from "react-bootstrap";

export default function Video() {

    return (
        <section>
            <Container className="video-container">
                <Row>
                    <Col>
                        <h2>For Every Mountain</h2>
                        {/* <p>For Every Mountain </p> */}
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/Zvba1wu8tIQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}