import { Container, Row, Col, ListGroupItem } from "react-bootstrap"

export default function Grid() {

    return (
        <section>
            <Container fluid className="grid-container"> 
                <Row className= "p-3">
                    <Col sm={12} md={4}>
                        <h2>Why Boca Code?</h2>
                        <p>The school was in-person and I was set on becoming a Software Engineer. </p>
                    </Col>
                    <Col sm={12} md={4}>
                        <h2>Exciting Projects</h2>
                        <ul>
                            <li>Office Zen</li>
                            <li>Wellness App</li>
                            <li>SoundBoard App</li>
                        </ul>
                    </Col>
                    <Col sm={12} md={4}>
                        <h2>Ideal Work Place?</h2>
                        <p>Hybrid, WFH & in Office. Preferably Tuesday, Wednesday, Thursday  OR  a Monday to Thurday, four day week, working week in office.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}