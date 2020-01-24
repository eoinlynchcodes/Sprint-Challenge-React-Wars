import React from "react";
import styled from 'styled-components';

const Box = styled.div`
border: 1px solid black;
background-color: white;
width: 50%;
padding: 0 50px;
margin: 0 auto;
border-radius: 12px;
`
const TemplateText = styled.h1`
font-family: 'New Courier'
`

const DataText = styled.h1`
color: silver;
`

const DataFrame = props => {
  console.log(props.data);


  return (
    <Box>
    <TemplateText>Name:</TemplateText> 
    <DataText>{props.data.name}</DataText>
    <TemplateText>Height:</TemplateText>
    <DataText>{props.data.height}</DataText>
    <TemplateText>Hair Color:</TemplateText>
    <DataText>{props.data.hair_color}</DataText>
    <TemplateText>Birth Year:</TemplateText>
    <DataText>{props.data.birth_year}</DataText>
    </Box>
  );
};

export default DataFrame;
