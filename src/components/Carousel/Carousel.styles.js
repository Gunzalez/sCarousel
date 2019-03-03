import styled, { injectGlobal } from 'styled-components';

import arrow from '../../images/arrow.svg';

injectGlobal`
    body {
        @import url('https://fonts.googleapis.com/css?family=Ropa+Sans');
        font-family: Ropa Sans;
    }
`;

const CarouselContainer = styled.div`   
    background: #ffffff;
    position: relative;
    overflow: hidden;
`;

export const Stage = styled.div`   
    background: #ffffff;
    width: 1875px
    padding-top: 37px;
    padding-bottom: 30px;
    display: flex;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    
    @media only screen and (min-width: 480px) {
        padding-top: 60px;
        width: 1825px
    }
`;

export const Imagery = styled.div`
    background-image: ${props => `url(${props.src})`};
    background-size: cover;
    background-repeat: no-repeat;
    width: 335px;
    height: 320px;
`;

export const SlideBox = styled.div`   
    box-sizing: border-box;
    padding: 0 20px;
    
    @media only screen and (min-width: 480px) {
        padding: 0 15px;
    }
`;

export const Header = styled.div`
    padding: 30px 33px;
    background: #eaeee7;
    height: 143px;
    box-sizing: border-box;
    
    @media only screen and (min-width: 480px) {
        height: 115px;
    }
`;

export const Title = styled.h2`
    color: #276696;
    padding: 0;
    margin: 0;
    font-size: 3.6em;
    font-weight: normal;
    letter-spacing: -1px;
    
    @media only screen and (min-width: 480px) {
        font-size: 2.8em;
    }
`;

export const Footer = styled.div`
    text-align: center;
    padding: 20px 20px 30px 20px;
    
    @media only screen and (min-width: 480px) {
        background: #eaeee7;
    }
`;

export const Spinner = styled.div`
    text-align: center;
    padding: 20px 20px 30px 20px;
    font-size: 1.6em;
`;

export const SlideDetail = styled.p`
    color: #276696;
    font-size: 1.4em;
`;

export const ButtonNext = styled.button`

    background: #3f729d;
    padding: 8px 20px;
    color: #ffffff;
    font-size: 1.0em;
    font-weight: bold;
    border: none;
    margin-right: 5px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    outline: none;

    @media only screen and (max-width: 480px) {
        background:rgba(255,255,255, 0.6);
        border: 0;
        color: #ffffff;
        background-image: url(${arrow});
        background-repeat: no-repeat;
        background-position: right center;
        text-indent: -2000px;
        height: 156px;
        width: 78px;
        border-top-left-radius: 110px;
        border-bottom-left-radius: 110px;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        position: absolute;
        top: 260px;
        right: 20px;
    }
`;

export const ButtonPrev = styled(ButtonNext)`

    margin-left: 5px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    
    @media only screen and (max-width: 480px) {
        right: auto;
        left: 20px;
        border-top-left-radius: 110px;
        border-bottom-left-radius: 110px;
        transform: scaleX(-1);
    }
`;

export default CarouselContainer;