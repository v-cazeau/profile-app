import { Container, Row, Col, Carousel } from "react-bootstrap";

export default function PictCarousel() {

    return(
        <section>
            <Container className="carousel-container">
                <Row>
                    <Col className="p-0">
                        <Carousel fade>
                            <Carousel.Item>
                                <img src="https://picsum.photos/seed/picsum/300/200"
                                    className="d-block w-100"
                                    alt="slide 1"/>
                            <Carousel.Caption>
                                <h2>First Item</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis tenetur incidunt rem officiis, minima qui itaque dignissimos deserunt ratione obcaecati, nemo aspernatur suscipit id, minus quis! Repudiandae eveniet maiores error?</p>
                            </Carousel.Caption>

                            </Carousel.Item>
                            
                            <Carousel.Item> 
                                <img src="https://picsum.photos/seed/picsum/300/200"
                                    className="d-block w-100"
                                    alt="slide 2" />
                            <Carousel.Caption>
                                <h2>Second Item</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis aliquam, voluptatem accusantium quo consequatur veritatis doloremque, perspiciatis asperiores molestias molestiae veniam? Suscipit nihil cumque beatae culpa dicta est et at?</p>
                            </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img src="https://picsum.photos/id/237/300/200"
                                    className="d-block w-100"
                                    alt="slide 3" />
                            <Carousel.Caption>
                                <h2>Third Item</h2>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos quod nulla maxime maiores corrupti cum a dolorum sit, illum iste nemo provident error vero exercitationem, quo accusamus aspernatur sequi vel?</p>
                            </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}