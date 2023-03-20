import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import {mobile} from '../Responsive'

//styled components
const Container=styled.div`
display:flex;
${mobile({
    flexDirection:"column"
})}
`
const Left=styled.div`
flex:1;
display:flex;
flex-direction:column;
padding:20px;
`
const Center=styled.div`
flex:1;
padding:20px;
${mobile({
    display:"none"
})}
`
const Title=styled.h3`
margin-bottom:30px;
`
const List=styled.ul`
margin:0;
padding:0;
list-style:none;
display:flex;
flex-wrap:wrap;
`
const Listitem=styled.li`
width:50%;
margin-bottom:10px;
`
const Right=styled.div`
flex:1;
padding:20px;
${mobile({
    backgroundColor:"#eee"
})}
`
const Logo=styled.h1`

`
const Desc=styled.p`
margin:20px 0px;
`
const SocialContainer=styled.div`
display:flex;
`
const SocialIcon=styled.div`
width:40px;
height:40px;
border-radius:50%;
color:white;
background-color:#${props=>props.color};
display:flex;
align-items:center;
justify-content:center;
margin-right:20px;
cursor:pointer;

&:hover{
    transform:scale(1.1);
    transition:ease 0.5s;
}
`
const ContactItem=styled.div`
margin-bottom:20px;
display:flex;
align-items:center;
`
const Payment=styled.img`
width:200px;
height:50px;
`

function Footer() {
  return (
    <Container>
        <Left>
            <Logo>WALK</Logo>
            <Desc>In publishing and graphic design, Lorem ipsum is a placeholder text
                 commonly used to demonstrate the visual form of a document or a typeface 
                 without relying on meaningful content. 
                Lorem ipsum may be used as a placeholder before final copy is available.
            </Desc>
            <SocialContainer>
                <SocialIcon color='3B5999'>
                    <FacebookIcon/>
                </SocialIcon>
                <SocialIcon color='E4405F'>
                    <InstagramIcon/>
                </SocialIcon>
                <SocialIcon color='55ACEE'>
                    <TwitterIcon/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <Listitem>Home</Listitem>
                <Listitem>Cart</Listitem>
                <Listitem>Men Fashion</Listitem>
                <Listitem>Kids Fashion</Listitem>
                <Listitem>Accesories</Listitem>
                <Listitem>My Account</Listitem>
                <Listitem>Order Tracking</Listitem>
                <Listitem>Wishlist</Listitem>
                <Listitem>Terms & Conditions</Listitem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
               <LocationOnIcon style={{marginRight:"10px"}}/> 622 Dixie PAth,Soth London 98876
            </ContactItem>
            <ContactItem>
              <LocalPhoneIcon style={{marginRight:"10px"}}/>  9946099450
            </ContactItem>
            <ContactItem>
              <MailOutlineIcon style={{marginRight:"10px"}}/>  contact@gmail.com
            </ContactItem>
            <Payment src='https://cdn.myshoptet.com/usr/www.led-grower.eu/user/documents/upload/img/logo-platebni-karty.png'/>
        </Right>
    </Container>
  )
}

export default Footer