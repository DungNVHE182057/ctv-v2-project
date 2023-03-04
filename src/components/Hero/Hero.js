import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, MainHeading } from "../../globalStyles";
import {
  HeroVideo,
  HeroSection,
  HeroText,
  ButtonWrapper,
  HeroButton,
} from "./HeroStyles";

const Hero = () => {
  return (
    <HeroSection>
      <HeroVideo src="./assets/hero.mp4" autoPlay muted />
      <Container>
        <MainHeading>Flexbox Game with Team 3</MainHeading>
        <HeroText>something...</HeroText>
        <ButtonWrapper>
          <Link to="signup">
            <Button>Get Started</Button>
          </Link>
          <HeroButton>Explore</HeroButton>
        </ButtonWrapper>
      </Container>
    </HeroSection>
  );
};

export default Hero;
