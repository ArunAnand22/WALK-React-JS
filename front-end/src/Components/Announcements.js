import React from 'react'
import styled from 'styled-components'


//styled components
const Container=styled.div`
height:30px;
background-color:teal;
color:white;
display:flex;
justify-content:center;
font-size:15px;
font-weight:500;
`

function Announcements() {
  return (
    <Container>
        Super Deal! Free shipping on orders over $30
    </Container>
  )
}

export default Announcements