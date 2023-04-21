// import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function About() {
 
    return(
        <main>
            <Container>
                <Row className="text-center">
                    <Col sm={12} md={6}>
                        <img src="/images/bp.jpg" 
                            className="rounded-circle"
                            alt="" />
                    </Col>
                    
                    <Col>
                        <h1 className="mt-3">Véronie Cazeau</h1>
                        <h2>About</h2>
                       <p> <mark> Multifaceted, like a parfait. Born in Miami, grew up in Worcester, college in Philly, in Florida once again, for loop. I previously was a massage therapist. Currently, becoming a software engineer. I come from a big, diverse family and I am part of the first-generation born in the United States. I enjoy getting creative and being outdoors, including nature hikes and listening to island music. My goal after school is to become a junior engineer with a focus on achieving a work-life balance.</mark> </p>
                    </Col>
                </Row>
            </Container>
        </main>
    )
}