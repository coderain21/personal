import { useState } from "react";
import { Heading, Text, Button, CloseButton } from '@chakra-ui/react';
import { AiFillGithub, AiOutlineArrowRight, AiFillLinkedin } from "react-icons/ai";
import avatar from "./../../images/hi.png";
import "./About.css";
import { EXPERIENCE, GITHUB, LINKEDIN, LOCATION, NAME, STACK, TITLE } from "../constants";
import { EMAIL } from "../constants";

const About = () => {
  
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const hide = () => setIsVisible(false);

  const getFontSize = () => {
    let width = window.innerWidth;
    if(width < 450) return "5rem";
    if(width < 1250) return "6rem";
    return "8rem";
  }

  const getAlertSize = () => {
    let width = window.innerWidth;
    if(width < 1275) return "md";
    return "lg";
  }

  const Alert = () => {
    if(isVisible) {
      return(
        <div className="alert">
          <Heading as="h3" size={getAlertSize()}>💻{"   "}
            <a href={`mailto:${EMAIL}`} className="contact-link">Hire Me!</a>
          </Heading>
          <CloseButton size='lg' className="close-btn" onClick={() => hide()} />
        </div>
      )
    }else{
      return null
    }
  }

  return(
    <>
    <Alert />
    <div className="bg">
      <div className="about-wrapper">
        <div className="about-text">
          <div className="about-title">
            <Heading as='h1' fontSize={getFontSize()} size='4xl'>
              Hi! 👋
            </Heading>
            <Heading as='h1' fontSize={getFontSize()} size='4xl'>
              I'm <span className="name">{NAME}</span>
            </Heading>
          </div>
          <div className="about-text-desc">
            <Text fontSize='3xl'>Passionate <span className="name">{TITLE}</span> from {LOCATION} with {EXPERIENCE} years of experience in {STACK}, enthusiastic about blockchain and web3 industry, looking forward to learn something new every day and contribute to the industry!</Text>
          </div>

          <div className="icons">
            <a href={GITHUB} target="_blank">
              <AiFillGithub className="icon" />
            </a>
            <a href={LINKEDIN} target="_blank">
              <AiFillLinkedin className="icon" />
            </a>
            {/* <a href={TWITTER} target="_blank">
              <AiFillTwitterCircle className="icon" />
            </a>
            <a href={TELEGRAM} target="_blank">
              <BsTelegram className="icon" />
            </a> */}
          </div>

          <a href={`mailto:${EMAIL}`}>
            <Button size='lg' rightIcon={<AiOutlineArrowRight />} colorScheme="blue" variant='solid'>
              Contact Me
            </Button>
          </a>
        </div>
        <div className="about-avatar">
          <img src={avatar} className="avatar" alt="my avatar" />
        </div>
      </div>
      {/* <div className="icon-wrapper">
        <div className="bottom-icon">
          <BsChevronDown />
        </div>
      </div> */}
    </div>
    </>
  )  
}

export default About;