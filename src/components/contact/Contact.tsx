import React from "react";
import { Button } from "@chakra-ui/react";
import { MdOutlineEmail } from "react-icons/md";
import { AiFillGithub, AiOutlineArrowRight } from "react-icons/ai";
// import { BsTelegram, BsGlobe2 } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { FaDiscord } from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';
import "./Contact.css";
import { DISCORD, EMAIL, GITHUB, LOCATION, TIME_ZONE } from "../constants";

export type Contact = {
  name: string,
  info: string,
  icon: React.ReactElement,
  url?: string,
}

export const contacts: Contact[] = [
  {
    name: "EMAIL:",
    info: EMAIL,
    icon: <MdOutlineEmail className="contact-icon" />,
    url: `mailto:${EMAIL}`,
  },
  // {
  //   name: "TWITTER:",
  //   info: "",
  //   icon: <AiFillTwitterCircle className="contact-icon" />,
  //   url: "",
  // },
  // {
  //   name: "TELEGRAM:",
  //   info: "",
  //   icon: <BsTelegram className="contact-icon" />,
  //   url: "",
  // },
  {
    name: "DISCORD:",
    info: "CodeRain",
    icon: <FaDiscord className="contact-icon" />,
    url: DISCORD,
  },
  {
    name: "GitHub:",
    info: "HappyDEV",
    icon: <AiFillGithub className="contact-icon" />,
    url: GITHUB,
  },
  {
    name: "LOCATION & ZONE:",
    info: `${LOCATION}, ${TIME_ZONE}`,
    icon: <IoLocationOutline className="contact-icon" />,
  },
];

const ContactContainer = () => {
  return(
    <div className="bg-contact">
      <div className="contact-header">
        <p className="heading">Contacte Me</p>
        <p className="text">If you have any questions or want to hire me, please contact me:</p>
      </div>

      <div className="contact-grid">
        {contacts.map((contact: Contact) => {
          return(
            <a key={uuidv4()} href={contact.url} target="_blank" style={{cursor: 'pointer'}}>
              <div className="contact-section">
                  {contact.icon}
                  <div className="contact-text-div">
                    <p className="contact-title">{contact.name}</p>
                    <p className="contact-details">{contact.info}</p>
                  </div>
              </div>
            </a>
          )
        })}
      </div>

      <div className="button-container">
        <a href={`mailto:${EMAIL}`}>
          <Button size='lg' rightIcon={<AiOutlineArrowRight />} colorScheme="blue" variant='solid' className="contact-btn">
            Contact Me
          </Button>
        </a>
      </div>
    </div>
  )
}

export default ContactContainer;