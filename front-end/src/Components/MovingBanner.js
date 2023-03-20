import React from 'react'
import styled, { keyframes } from 'styled-components'
import './MovingBanner.css'

//styled component
const Container=styled.div`
display:flex;
align-items:center;
height: 80px;
width: 1500px;
margin: 0 auto;
background-color:white;
overflow:hidden;
border-top:3px solid lightgrey;
border-bottom:3px solid lightgrey;
margin-top:60px;
margin-bottom:40px;
`
const Title=styled.h1`

`

function MovingBanner() {
  return (
    <Container>
        <div className='image'><img src='https://www.pngall.com/wp-content/uploads/8/Reebok-Logo-Transparent.png'/></div>
        <div className='image'><img src='https://1000logos.net/wp-content/uploads/2019/06/Adidas-Logo-1991.jpg'/></div>
        <div className='image'><img src='https://s3.amazonaws.com/cdn.designcrowd.com/blog/40-Famous-Shoe-Logos/FILA.png'/></div>
        <div className='image'><img src='https://s3.amazonaws.com/cdn.designcrowd.com/blog/40-Famous-Shoe-Logos/Nike.png'/></div>
        <div className='image'><img src='https://s3.amazonaws.com/cdn.designcrowd.com/blog/40-Famous-Shoe-Logos/Droors-Clothing.png'/></div>
        <div className='image'><img src='https://brandongaille.com/wp-content/uploads/2013/07/Vans-Company-Logo.jpg'/></div>
        <div className='image'><img src='https://s3.amazonaws.com/cdn.designcrowd.com/blog/40-Famous-Shoe-Logos/Converse.png'/></div>
        <div className='image'><img src='https://www.marketingmind.in/wp-content/uploads/2020/04/liberty.jpg'/></div>
        
    </Container>
  )
}

export default MovingBanner