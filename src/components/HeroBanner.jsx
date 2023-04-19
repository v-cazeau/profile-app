import { Container, Row, Col } from "react-bootstrap"

export default function HeroBanner() {

    return(
        <section>
            <Container fluid className="bg-danger">
                <Row> 
                    <Col> 
                        <img src=""
                            alt="hero-img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}