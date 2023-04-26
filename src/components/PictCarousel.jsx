import { Container, Row, Col, Carousel } from "react-bootstrap";

export default function PictCarousel() {

    return(
        <section>
            <Container className="carousel-container">
                <Row>
                    <Col className="p-0">
                        <Carousel fade>
                            <Carousel.Item>
                                <img src="/images/carousel/pict2.jpg"
                                    className="d-block w-100"
                                    alt="slide 1"/>
                            </Carousel.Item>
                            
                            <Carousel.Item> 
                                <img src="/images/carousel/pict3.jpg"
                                    className="d-block w-100"
                                    alt="slide 2" />
                            </Carousel.Item>

                            <Carousel.Item>
                                <img src="/images/carousel/pict4.jpg"
                                    className="d-block w-100"
                                    alt="slide 3" />
                            </Carousel.Item>

                            <Carousel.Item>
                                <img src="/images/carousel/pict6.jpg"
                                    className="d-block w-100"
                                    alt="slide 4" />
                            </Carousel.Item>

                            <Carousel.Item>
                                <img src="/images/carousel/pict7.jpg"
                                    className="d-block w-100"
                                    alt="slide 5" />
                            </Carousel.Item>

                            {/* <Carousel.Item> 
                                <img src="/image/carousel/pict9.jpg"
                                    className="d-block w-100"
                                    alt="slide 6" />
                            </Carousel.Item>

                            <Carousel.Item>
                                <img src="/image/carousel/pict10.jpg"
                                    className="d-block w-100"
                                    alt="slide 7" />
                            </Carousel.Item>

                            <Carousel.Item>
                                <img src="/image/carousel/pict8.webp"
                                    className="d-block w-100"
                                    alt="slide 8" />
                            </Carousel.Item> */}
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}