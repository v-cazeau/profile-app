import { Container, Row, Col, ListGroupItem } from "react-bootstrap"

export default function Grid() {

    return (
        <section>
            <Container fluid className="grid-container"> 
                <Row className= "p-3">
                    <Col sm={12} md={4}>
                        <h2>Why BC?</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis porro rerum tenetur dicta laboriosam, dolores, molestiae cum itaque quaerat repudiandae voluptatibus explicabo harum distinctio ipsa fugit deleniti esse voluptas dolorum.</p>
                    </Col>
                    <Col sm={12} md={4}>
                        <h2>Exciting Project?</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At sed asperiores maxime inventore voluptatem unde numquam. Perferendis pariatur, nobis veniam eaque ducimus in quaerat quasi odio autem vero omnis ratione.</p>
                    </Col>
                    <Col sm={12} md={4}>
                        <h2>Ideal Work Place?</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ab ipsum blanditiis sed expedita quo eveniet rem mollitia corrupti placeat sapiente, ipsam delectus pariatur molestias, eos incidunt animi sit nobis?</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}