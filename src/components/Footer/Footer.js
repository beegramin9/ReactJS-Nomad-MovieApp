import React from "react";
import { } from "./FooterStyle";
import { StyledLink } from "../../styles/GlobalComponents/LinkStyle";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { FooterWrapper, SocialIcons } from "./FooterStyle";

const Footer = () => {
    return (
        <FooterWrapper>
            <SocialIcons href="https://github.com/beegramin9/ReactJS-Nomad-MovieApp">
                <AiFillGithub size="3rem"/>
            </SocialIcons>
            <SocialIcons href="https://linkedin.com/in/wontae-choi-917259209">
              <AiFillLinkedin size="3rem"/>
            </SocialIcons>
            <SocialIcons href="https://instagram.com/beestron9">
              <AiFillInstagram size="3rem"/>
            </SocialIcons>
        </FooterWrapper>
    )
}

export default Footer;