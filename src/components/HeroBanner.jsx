import { Container, Row, Col } from "react-bootstrap"

export default function HeroBanner() {

    return(
        <section>
            <Container fluid className="hero-banner">
                <Row> 
                    <Col className="text-center"> 
                            Email: veronie.cazeau@gmail.com
                    </Col>
                </Row>
            </Container>
        </section>
    )
}