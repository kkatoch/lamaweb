import React from "react";
import "./Carousel.css";
import {MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBMask, MDBView} from "mdbreact";

class CarouselImage extends React.Component {
    render() {
        return (
            <MDBContainer>
                <MDBCarousel
                    activeItem={1}
                    length={3}
                    showControls={false}
                    showIndicators={true}
                    className="z-depth-1"
                >
                    <MDBCarouselInner>
                        <MDBCarouselItem itemId="1">
                            <MDBView>
                                <img
                                    className="d-block w-100 carousel-image"
                                    src="https://images.unsplash.com/photo-1482245294234-b3f2f8d5f1a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80"
                                    alt="First slide"
                                />
                                <MDBMask overlay="black-light" className="pattern-5"/>
                            </MDBView>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="2">
                            <MDBView>
                                <img
                                    className="d-block w-100 carousel-image"
                                    src="https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1115&q=80"
                                    alt="Second slide"
                                />
                                <MDBMask overlay="black-strong" className="pattern-5"/>
                            </MDBView>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="3">
                            <MDBView>
                                <img
                                    className="d-block w-100 carousel-image"
                                    src="https://images.unsplash.com/photo-1533059258520-2a887567688c?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
                                    alt="Third slide"
                                />
                                <MDBMask overlay="black-strong" className="pattern-5"/>
                            </MDBView>
                        </MDBCarouselItem>
                    </MDBCarouselInner>
                </MDBCarousel>
            </MDBContainer>
        );
    }
}

export default CarouselImage;
