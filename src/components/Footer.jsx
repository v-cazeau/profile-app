import { Container, Row, Col } from "react-bootstrap"
import { GitHub } from "react-bootstrap-icons"

export default function Footer(){

    const currentYear= new Date().getFullYear();
    const gitHubUrl= "https://github.com/v-cazeau/profile-app"

    return (
        <footer>
            <Container> 
                <Row> 
                    <Col 
                    className="text-center">
                    <p>&copy; {currentYear} Véronie Cazeau
                    <br />
                    {/* <GitHub 
                        color= "white"
                        size={20}/> 
                    <a href={gitHubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="button-effect">Code in GitHub</a> */}
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}