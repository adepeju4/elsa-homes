import React, {useState, useEffect, useRef} from 'react';
import styled, { css } from 'styled-components/macro';
import { Button } from './Button';
import { BsArrowRight } from 'react-icons/bs';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';


const HeroSection = styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;

`;

const HeroWrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
position: relative;
`;

const HeroSlide = styled.div`
z-index: 1;
width: 100%;
height: 100%;

`;
const HeroSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
 

  &::before {
    content: "";
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 1) 50%,
      rgba(0, 0, 0, 0.9) 100%
    );
  }
`;
const HeroImage = styled.img`
position: absolute;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
object-fit: cover;
`;
const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  padding-left: 2rem;
  flex-direction: column;
  max-width: 1600px;
  width: calc(100%-100x);
  color: #fff;
  h1 {
    font-size: clamp(1rem, 8vw, 2rem);
    font-weight: 400;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    text-align: left;
    margin-bottom: 0.8rem;
  }
  p {
    margin-bottom: 1.2rem;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  }
`;
const Arrow = styled(BsArrowRight)`
margin-left: 0.5rem;
`;
const SliderButtons = styled.div`
position: absolute;
bottom: 50px;
right: 50px;
display: flex;
z-index: 10;
`;
const ArrowButtons = css`
width: 50px;
height: 50px;
color: #fff;
cursor: pointer;
background: #000d1a;
border-radius: 50px;
padding: 10px;
margin-right: 1rem;
user-select: none;
transition: 0.3s;

&:hover{
    background: #cd853f;
    transform: scale(1.05);
}
`;
const PrevArrow = styled(AiOutlineArrowLeft)`
${ArrowButtons}
`;
const NextArrow = styled(AiOutlineArrowRight)`
  ${ArrowButtons}
`;

function Hero({ Slides }) {
    const [current, setCurrent] = useState(0);
    const length = Slides.length;
    const timeout = useRef(null);

    useEffect(() => {
        const nextSlide = () => {
            setCurrent(current => (current === length - 1 ? 0 : current + 1));
        }

        timeout.current = setTimeout(nextSlide, 2500);
        return () => {
            if (timeout.current) {
                clearTimeout(timeout.current)
            }
        }
    }, [current, length])

    const nextSlide = () => {
        if (timeout.current) {
            clearTimeout(timeout.current);
        }
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        if (timeout.current) {
            clearTimeout(timeout.current);
        }
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    if (!Array.isArray(Slides) || Slides.length <= 0) {
        return null;
    }

    return (
      <HeroSection>
        <HeroWrapper>
          {Slides.map((slide, i) => (
            <HeroSlide key={`slide${i}`}>
              {i === current && (
                <HeroSlider>
                  <HeroImage src={slide.Image} alt={slide.alt} />
                  <HeroContent>
                    <h1> {slide.title}</h1>
                    <p>
                      {"\u20A6"}
                      {slide.price}
                    </p>
                    <Button
                      to={slide.path}
                      primary
                      css={`
                        max-width: 160px;
                      `}
                    >
                      {slide.label}
                      <Arrow />
                    </Button>
                  </HeroContent>
                </HeroSlider>
              )}
            </HeroSlide>
          ))}
          <SliderButtons>
            <PrevArrow onClick={prevSlide} />
            <NextArrow onClick={nextSlide} />
          </SliderButtons>
        </HeroWrapper>
      </HeroSection>
    );
}

export default Hero
