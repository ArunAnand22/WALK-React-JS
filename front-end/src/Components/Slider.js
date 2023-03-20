import React, { useState } from 'react'
import styled from 'styled-components'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { sliderItems } from '../data';
import {mobile} from '../Responsive'
import { Link } from 'react-router-dom';

//styled components
const Container=styled.div`
width:100%;
height:100vh;
display:flex;
position:relative;
overflow:hidden;
${mobile({
    display:"none"
})}
`
const Arrow=styled.div`
width:50px;
height:50px;
background-color:rgba(0,0,0,0.7);
color:white;
border-radius:50%;
display:flex;
justify-content:center;
align-items:center;
position:absolute;
top:0;
bottom:0;
left:${props=>props.direction === "left" && "10px"};
right:${props=>props.direction === "right" && "10px"};
margin:auto;
cursor:pointer;
opacity:0.6;
z-index:2;
`
const Wrapper=styled.div`
height:100%;
display:flex;
transition:all 1.5s ease;
transform:translateX(${props=>props.slideIndex*-100}vw);
`
const Slide=styled.div`
display:flex;
align-items:center;
width:100vw;
height:100vh;
background-color:#${props=>props.bg};
`
const ImgContainer=styled.div`
flex:1;
height:100%;
display:flex;
justify-content:center;
align-items:center;
`
const Image=styled.img`
height:50%;
`
const InfoContainer=styled.div`
flex:1;
padding:50px;
`
const Title=styled.h1`
font-size:70px;
`
const Description=styled.p`
margin:50px 0px;
font-size:20px;
font-weight:500;
letter-spacing:3px;
`
const Button=styled.button`
padding:10px;
font-size:20px;
background-color:transparent;
cursor:pointer;
`

function Slider() {
    const [slideIndex,setslideIndex]=useState(0)
    const handleClick=(direction)=>{
        if(direction==="left"){
            setslideIndex(slideIndex > 0 ? slideIndex-1:2)
        }else{
            setslideIndex(slideIndex < 2 ? slideIndex+1:0)
        }
    }
  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
        <ArrowLeftOutlinedIcon/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map(items=>(
            <Slide bg={items.bg}>
            <ImgContainer>
                <Image src={items.img}/>
            </ImgContainer>
            <InfoContainer>
                <Title>{items.title}</Title>
                <Description>{items.desc}</Description>
                <Link to={'/Login'}>
                <Button>Shop Now</Button>
                </Link>
            </InfoContainer>
            </Slide>
            ))}
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
        <ArrowRightOutlinedIcon/>
        </Arrow>
    </Container>
  )
}

export default Slider