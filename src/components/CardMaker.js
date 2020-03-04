import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";


const CardMaker = props => {
   
   const [data, setData] = useState([])


   useEffect(() => {
     
    {axios.get('https://api.nasa.gov/planetary/apod?api_key=SfA59MmLR0aXOGm8kaZhctreNqLecGJtzlWkIz95')
    .then(res => {
        setData(res.data)
        console.log(res.data)
    })
    .catch(err => {
        console.log(err)})

   }},[])

    return (
       <div>
         <Card date={data.date} explanation = {data.explanation} title = {data.title} imgUrl = {data.hdurl} />  
       </div>
   );
};

export default CardMaker;