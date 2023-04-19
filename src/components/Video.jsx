import { Container, Row, Col } from "react-bootstrap";

export default function Video() {

    return (
        <section>
            <Container className="video-container">
                <Row>
                    <Col>
                        <h2>Video</h2>
                        <p>Liiiiiifffffftttt me up hooooooollllddd meh down keeepppppp me close safe and sound </p>
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/pyR1YFqb84I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}