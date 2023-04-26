import { Container, Row, Col, ListGroupItem } from "react-bootstrap"

export default function Grid() {

    return (
        <section>
            <Container fluid className="grid-container"> 
                <Row className= "p-3">
                    <Col sm={12} md={4}>
                        <h2>Why Boca Code?</h2>
                        <p>I chose Boca Code because I was looking for an in-person learning experience and determined to become a software engineer. In addition, I was drawn to the school's community values and support, which spoke to me on a deeper level. The team at Boca Code feels like a family, and this sense of belonging and support was an important factor in my decision to attend the school. </p>
                    </Col>
                    <Col sm={12} md={4}>
                        <h2>Exciting Projects</h2>
                         <p>I'm eager to start working on some exciting projects, including an app called Office Zen and wellness apps, and a soundboard app. I see these projects as opportunities to create something impactful and challenging, and I'm excited to see where they take me.</p>
                    </Col>
                    <Col sm={12} md={4}>
                        <h2>Ideal Work Place?</h2>
                        <p>My ideal work place would be a hybrid model, where I can work both from home and in the office. Ideally, I would like to work in the office either Tuesday through Thursday or Monday through Thursday. I value working for a company that helps others and society, and provides opportunities for personal growth and development. I also appreciate a tranquil, artistic, and creative environment, and working with a team that encourages community and teamwork. It's important for me to have work-life balance and the ability to earn money while also having personal time. Lastly, I want to work on projects that are exciting and rewarding, and impactful.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}