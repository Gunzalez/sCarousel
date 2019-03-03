import React, { Component } from 'react';

import CarouselContainer, { ButtonPrev, ButtonNext, Footer, Header, Title, Stage, SlideBox, SlideDetail, Imagery } from './Carousel.styles';

import data from '../../data/hits';

const Slide = ({ image, likes, user }) => {
    return (
        <SlideBox>
            <Imagery src={image} />
            <SlideDetail>User: {user}, Likes: {likes}</SlideDetail>
        </SlideBox>
    )
};

class Carousel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            slides: 5,
            hits: data.hits
        };
    }

    createSlides(){
        const Slides = [];
        for(let i=0; i < this.state.slides; i++){
            Slides.push(
                <Slide key={i}
                   image={this.state.hits[i]['largeImageURL']}
                   user={this.state.hits[i]['user']}
                   likes={this.state.hits[i]['likes']} />
            )
        }
        return Slides;
    }

    render() {

        return (
            <CarouselContainer>
                <Header>
                    <Title>Carousel Test</Title>
                </Header>
                <Stage>
                    { this.createSlides() }
                </Stage>
                <Footer>
                    <ButtonPrev>
                        Prev
                    </ButtonPrev>
                    <ButtonNext>
                        Next
                    </ButtonNext>
                </Footer>
            </CarouselContainer>
        );
    }
}

export default Carousel;
