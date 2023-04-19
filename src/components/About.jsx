import { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

export default function About() {
   const [imgUrl, setImgUrl]=useState("https://picsum.photos/200/300"); 


    return(
        <main>
            <Container>
                <Row className="text-center">
                    <Col sm={12} md={6}>
                        <img src={imgUrl} 
                            className="rounded-circle"
                            alt="Profile" />
                    </Col>
                    <Button onClick={() => setImgUrl("https://picsum.photos/400/400?random=1")}> Change 4 Image </Button>
                    <Button onClick={() => setImgUrl("https://picsum.photos/300/300")}> Change 3 Image </Button>
                    <Col>
                        <h1 className="mt-3">Véronie Cazeau</h1>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, amet explicabo! Quam adipisci voluptas qui earum illum recusandae, magnam ullam porro, assumenda sed laborum dolore dolor minus praesentium quas quisquam?</p>
                    </Col>
                </Row>
            </Container>
        </main>
    )
}