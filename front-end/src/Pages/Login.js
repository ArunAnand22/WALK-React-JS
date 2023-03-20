import React from 'react'
import styled from 'styled-components'
import {mobile} from '../Responsive'
import { Link } from 'react-router-dom'


//styled components
const Container=styled.div`
width:100vw;
height:100vh;
background: url('https://img4.goodfon.com/wallpaper/nbig/d/6c/veshalka-odezhda-futbolki.jpg');
background-position: center;
background-size: cover;
display:flex;
align-items:center;
justify-content:center;
`
const Wrapper=styled.div`
width:25%;
padding:20px;
background-color:white;
${mobile({
  width:"75%"
})}
`
const Title=styled.h1`
font-size:24px;
font-weight:300;
`
const Form=styled.form`
display:flex;
flex-direction:column;
`
const Input=styled.input`
flex:1;
min-width:40%;
margin:10px 0px;
padding:10px;
`
const Button=styled.button`
width:40%;
border:none;
padding:20px 40px;
background-color:teal;
color:white;
cursor:pointer;
margin-bottom:10px;
`
const Links=styled.a`
margin:5px 0px;
font-size:12px;
text-decoration:underline;
cursor:pointer;
`

function Login() {
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="email"/>
                <Input placeholder="password"/>
                <Button>LOGIN</Button>
                <Link to={'/register'}>
                <Links>Create a new account?</Links>
                </Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login