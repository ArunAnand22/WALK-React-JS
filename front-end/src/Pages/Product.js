import React from 'react'
import styled from 'styled-components'
import Navbar from '../Components/Navbar'
import Announcements from '../Components/Announcements'
import Newsletter from '../Components/Newsletter'
import Footer from '../Components/Footer'
import { Add, Remove } from '@mui/icons-material'
import {mobile} from '../Responsive'

//styled components
const Container=styled.div``
const Wrapper=styled.div`
padding:50px;
 display:flex;
 ${mobile({
    padding:"10px",
    flexDirection:"column"
  })}
`
const ImgContainer=styled.div`
flex:1;
`
const Img=styled.img`
width:100%;
height:90vh;
object-fit:cover;
${mobile({
    height:"40%"
  })}
`
const InfoContainer=styled.div`
flex:1;
padding:0px 50px;
${mobile({
    padding:"0px 10px"
  })}
`
const Title=styled.h1`
font-weight:200;
`
const Desc=styled.p`
margin:20px 0px;
`
const Price=styled.span`
font-weight:100;
font-size:40px;
`
const FilterContainer=styled.div`
width:50%;
margin:30px 0px;
display:flex;
justify-content:space-between;
${mobile({
    width:"100%"
  })}
`
const Filter=styled.div`
display:flex;
align-items:center;
`
const FilterTitle=styled.div`
font-size:20px;
font-weight:200;
`
const FilterColor=styled.div`
width:20px;
height:20px;
border-radius:50%;
background-color:${props=>props.color};
margin:0px 5px;
cursor:pointer;
`
const FilterSize=styled.select`
margin-left:10px;
padding:5px;
`
const FilterSizeOption=styled.option``
const AddContainer=styled.div`
display:flex;
align-items:center;
width:50%;
justify-content:space-between;
${mobile({
    width:"100%"
  })}
`
const AmountContainer=styled.div`
display:flex;
align-items:center;
font-weight:700;
`
const Amount=styled.span`
width:30px;
height:30px;
border-radius:10px;
border:1px solid teal;
display:flex;
align-items:center;
justify-content:center;
margin:5px;
`
const Button=styled.button`
padding:15px;
border:2px solid teal;
background-color:white;
cursor:pointer;
font-weight:500;

&:hover{
    background-color:orange;
}
`

function Product() {
  return (
    <Container>
        <Navbar/>
        <Announcements/>
        <Wrapper>
            <ImgContainer>
                <Img src='https://www.apetogentleman.com/wp-content/uploads/2018/06/male-models-noah.jpg'/>
            </ImgContainer>
            <InfoContainer>
                <Title>Denim Jumpsuit</Title>
                <Desc>In publishing and graphic design, Lorem ipsum is a placeholder
                     text commonly used to demonstrate the visual form of a document
                      or a typeface without relying on meaningful content.</Desc>
                <Price>$3000</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Colour</FilterTitle>
                        <FilterColor color='black'/>
                        <FilterColor color='red'/>
                        <FilterColor color='darkblue'/>
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove/>
                        <Amount>1</Amount>
                        <Add/>
                    </AmountContainer>
                    <Button>Add to Cart</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product