import React from "react";
import styled from "styled-components";

const Anchor = styled.a`
  text-decoration: none;
  color: black;
  margin: 0 16px;
  font-weight: bold;

  &:hover {
    color: lightblue;
  }
`;
const NavBar = props => {
  
  return(
     <div>
        <Anchor href='#'>Home</Anchor>
        <Anchor href='#'>Services</Anchor>
        <Anchor href='#'>About</Anchor>
        <Anchor href='#'>Contact Us</Anchor>
     </div>
    );
};

export default NavBar ;