import React, { Component } from 'react';

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

        const photosUrl = 'https://pixabay.com/api/?key=9656065-a4094594c34f9ac14c7fc4c39&q=beautiful+landscape&image_type=photo&per_page=26';

        fetch(photosUrl)
            .then(response =>{
                if(response.statusText === "OK"){
                    return response.json()
                }
            })
            .then( responseInJSON =>{
                const { hits } = responseInJSON;
                this.setState({
                    hits
                })
            })
            .catch(err => {
                console.log('Fetch Error: ' + err);
            })
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

        return (
            <CarouselContainer>
                <Header>
                    <Title>Carousel Test</Title>
                </Header>

                { this.state.hits.length ?

                        <Stage>{ this.createSlides() }</Stage>
                    :
                        <Spinner>Loading...</Spinner>
                }

                { this.state.hits.length ?

                    <Footer>
                        <ButtonPrev onClick={this.goToNextSlide}>
                            Prev
                        </ButtonPrev>
                        <ButtonNext onClick={this.goToPrevSlide}>
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
