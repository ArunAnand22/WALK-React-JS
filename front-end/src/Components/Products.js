import React from 'react'
import Product from './Product'
import styled from 'styled-components'


//styled components
const Container=styled.div`
padding:20px;
display:flex;
flex-wrap:wrap;
justify-content:space-between;
`

function Products({item}) {


  return (
    <Container>
        {
            item?(item.map(item=>(
                <Product item={item} key={item.id}/>
            ))):''
        }
    </Container>
  )
}

export default Products