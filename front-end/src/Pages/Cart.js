import React from 'react'
import styled from 'styled-components'
import Navbar from '../Components/Navbar'
import Announcement from '../Components/Announcements'
import Footer from '../Components/Footer'
import { Add, Remove } from '@mui/icons-material'
import {mobile} from '../Responsive'
import { Link } from 'react-router-dom'

//styled components
const Container=styled.div``
const Wrapper=styled.div`
padding:20px;
${mobile({
    padding:"10px"
  })}
`
const Title=styled.h1`
font-weight:300;
text-align:center;
`
const Top=styled.div`
display:flex;
align-items:center;
justify-content:space-between;
padding:20px;
`
const TopButton=styled.button`
padding:10px;
font-weight:600;
cursor:pointer;
border:${props=>props.type==="filled" && "none"}
background-color:${props=>props.type==="filled" ? "black":"transparent"}
color:${props=>props.type==="filled" && "white"}
`
const TopTexts=styled.div`
display:flex;
${mobile({
    display:"none"
  })}
`
const TopText=styled.div`
text-decoration:underline;
cursor:pointer;
margin:0px 10px;
`
const Bottom=styled.div`
display:flex;
justify-content:space-between;
${mobile({
    flexDirection:"column"
  })}
`
const Info=styled.div`
flex:3;
`
const Hr=styled.hr`
background-color:gray;
border:none;
height:1px;
`
const Product=styled.div`
display:flex;
justify-content:space-between;
${mobile({
    flexDirection:"column"
  })}
`
const PriceDetails=styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`
const ProductDetails=styled.div`
flex:2;
display:flex;
`
const Img=styled.img`
width:200px;
`
const Details=styled.div`
padding:20px;
display:flex;
flex-direction:column;
justify-content:space-around;
`
const ProductName=styled.span``
const ProductId=styled.span``
const ProductColor=styled.div`
width:20px;
height:20px;
border-radius:50%;
background-color:${props=>props.color};
`
const ProductSize=styled.span``
const ProductAmountContainer=styled.div`
display:flex;
align-items:center;
margin-bottom:20px;
`
const ProductAmount=styled.div`
font-size:24px;
margin:5px;
${mobile({
    margin:"5px 15px"
  })}
`
const ProductPrize=styled.div`
font-size:30px;
font-weight:200;
${mobile({
    marginBottom:"20px"
  })}
`
const Summary=styled.div`
flex:1;
border:0.5px solid lightgrey;
border-radius:10px;
padding:20px;
height:50vh;
`
const SummaryTitle=styled.h1`
font-weight:200;
`
const SummaryItem=styled.div`
margin:30px 0px;
display:flex;
justify-content:space-between;
font-weight:${props=>props.type==="total" && "500"}
font-size:${props=>props.type==="total" && "24px"}
`
const SummaryItemText=styled.span``
const SummaryItemPrice=styled.span``
const Button=styled.button`
width:100%;
padding:10px;
background-color:black;
color:white;
font-weight:600;
`

function Cart() {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
            <Wrapper>
                <Title>CART</Title>
                <Top>
                    <Link to='/'>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    </Link>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your Wishlist(0)</TopText>
                    </TopTexts>
                    <TopButton type='filled'>CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetails>
                                <Img src='https://www.transparentpng.com/thumb/shirt/oYBUkZ-white-t-shirt-clipart-hd.png'/>
                                <Details>
                                    <ProductName><b>Product: </b>JEANS</ProductName>
                                    <ProductId><b>ID: </b>25521</ProductId>
                                    <ProductColor color='black'/>
                                    <ProductSize><b>Size: </b>XL</ProductSize>
                                </Details>
                            </ProductDetails>
                            <PriceDetails>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>2</ProductAmount>
                                    <Remove/>    
                                </ProductAmountContainer> 
                            <ProductPrize>$ 3000</ProductPrize>
                            </PriceDetails>
                        </Product>
                        <Hr/>
                        <Product>
                            <ProductDetails>
                                <Img src='https://freepngimg.com/thumb/shoes/27695-7-sneaker-transparent.png'/>
                                <Details>
                                    <ProductName><b>Product: </b>SNEAKERS</ProductName>
                                    <ProductId><b>ID: </b>25527</ProductId>
                                    <ProductColor color='red'/>
                                    <ProductSize><b>Size: </b>Small</ProductSize>
                                </Details>
                            </ProductDetails>
                            <PriceDetails>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>1</ProductAmount>
                                    <Remove/>    
                                </ProductAmountContainer> 
                            <ProductPrize>$ 5000</ProductPrize>
                            </PriceDetails>
                        </Product>

                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemText>$ 8000</SummaryItemText>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemText>$ 500</SummaryItemText>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shippind Discount</SummaryItemText>
                            <SummaryItemText>$ -30</SummaryItemText>
                        </SummaryItem>
                        <SummaryItem  type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ 7500</SummaryItemPrice>
                        </SummaryItem>
                        <Button>CHECKOUT NOW</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart