import React from "react";
import styled from "styled-components";


const Headline = styled.h1`
  color: dodgerblue;

`;

const Card = props => {
    return (
        <div>
           <Headline>{props.title}</Headline>
           <div>
             <img src={props.imgUrl} alt={props.title}/>
           </div>
           <div>
             <p>{props.explanation}</p>      
           </div> 
           <p>{props.date}</p>  
        </div>
    );
};

export default Card;