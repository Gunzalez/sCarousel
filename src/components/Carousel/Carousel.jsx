import React, { Component } from 'react';

import { getPhotos } from '../../ajaxWrapper';

import 'whatwg-fetch';

import CarouselContainer, { ButtonPrev, ButtonNext, Footer, Header, Title, Stage, SlideBox, SlideDetail, Imagery, Spinner } from './Carousel.styles';

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
            hits: []
        };

        this.goToNextSlide = this.goToNextSlide.bind(this);
        this.goToPrevSlide = this.goToPrevSlide.bind(this);
    }

    componentDidMount(){

        const photosUrl = 'https://pixabay.com/api/?key=9656065-a4094594c34f9ac14c7fc4c39&q=beautiful+landscape&image_type=photo&per_page=6';

        getPhotos(photosUrl)
            .then(data => {
                const { hits } = data;
                this.setState({ hits })
            })
    }

    goToNextSlide(){
        const currentList = this.state.hits.slice(0);
        const lastItem = currentList.pop();
        currentList.unshift(lastItem);
        this.setState({
            hits: currentList
        })
    }

    goToPrevSlide(){
        const currentList = this.state.hits.slice(0);
        const firstItem = currentList.shift();
        currentList.push(firstItem);
        this.setState({
            hits: currentList
        })
    }

    render() {

        const { state: { slides, hits }, goToNextSlide, goToPrevSlide } = this;

        const displaySlides = () => {
            const Slides = [];
            for(let i=0; i < slides; i++){
                Slides.push(
                    <Slide key={i}
                        image={hits[i]['largeImageURL']}
                        user={hits[i]['user']}
                        likes={hits[i]['likes']} />
                )
            }
            return Slides;
        };

        return (
            <CarouselContainer>
                <Header>
                    <Title>Carousel Test</Title>
                </Header>

                { this.state.hits.length ?

                        <Stage>{ displaySlides() }</Stage>
                    :
                        <Spinner>Loading...</Spinner>
                }

                { this.state.hits.length ?

                    <Footer>
                        <ButtonPrev onClick={ goToNextSlide }>
                            Prev
                        </ButtonPrev>
                        <ButtonNext onClick={ goToPrevSlide }>
                            Next
                        </ButtonNext>
                    </Footer>

                    :

                    null
                }

            </CarouselContainer>
        );
    }
}

export default Carousel;
