import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {mobile} from '../Responsive'
import { Link } from 'react-router-dom';

//styled components
const Container=styled.div`
height:60px;
${mobile({
    height:"50px"
})}
`
const Wrapper=styled.div`
padding:10px 20px;
display:flex;
justify-content:space-between;
align-items:center;

${mobile({
    padding:"10px 0px"
})}
`
const Left=styled.div`
flex:1;
display:flex;
align-items:center;
`
const SearchContainer=styled.div`
border:0.5px solid lightgrey;
display:flex;
margin-left:25px;
padding:5px;
`
const Input=styled.input`
border:none;
${mobile({
    width:"50px"
})}
`
const Logo=styled.h1`
font-weight:bold;
${mobile({
    fontSize:"24px"
})}
`
const Image=styled.img`
height:45px;
margin-right:5px;
${mobile({
    display:"none"
})}
`
const Center=styled.div`
flex:1;
text-align:center;
display:flex;
`
const Right=styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;
${mobile({
    justifyContent:"center",
    flex:2
})}
`
const MenuItem=styled.div`
font-size:14px;
cursor:pointer;
margin-left:25px;
${mobile({
    fontSize:"12px",
    marginLeft:"10px"
})}
`

function Navbar() {
    
  return (
    <Container>
        <Wrapper>
        <Left>
            <SearchContainer>
            <Input placeholder='search'/>
            <SearchIcon style={{color:"grey",fontSize:"16px"}}/>
            </SearchContainer>
        </Left>
        <Center>
            <Image src='https://www.graphicsprings.com/filestorage/stencils/1cf0e62090ebd950855b702c81587979.png?width=500&height=500'/>
            <Logo>WALK.</Logo>
        </Center>
        <Right>
            <Link to={'/register'}>
            <MenuItem>REGISTER</MenuItem>
            </Link>
            <Link to={'/Login'}>
            <MenuItem>SIGN IN</MenuItem>
            </Link>
            <Link to={'/cart'}>
            <MenuItem>
            <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlinedIcon/>
            </Badge>
            </MenuItem>
            </Link>
        </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar