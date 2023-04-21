import { Container, Row, Col } from "react-bootstrap"

// import { GitHub } from "react-bootstrap-icons"

export default function Footer(){

    const currentYear= new Date().getFullYear();
    const gitHubUrl= "https://github.com/v-cazeau/profile-app"

    return (
        <footer>
            <Container> 
                <Row> 
                    <Col className="text-center"> 
                    <p>&copy; {currentYear} Véronie Cazeau
                    <br />
                    {/* <GitHub/>  */}
                    <a href={gitHubUrl}
                        target="_blank"
                        rel="noreferrer">Code in GitHub</a>
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}