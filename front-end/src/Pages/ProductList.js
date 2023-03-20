import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import Navbar from '../Components/Navbar'
import Announcements from '../Components/Announcements'
import Products from '../Components/Products'
import Newsletter from '../Components/Newsletter'
import Footer from '../Components/Footer'
import {mobile} from '../Responsive'
import axios from 'axios'



//styled components
const Container=styled.div`

`
const Title=styled.h1`
margin:20px;
`
const FilterContainer=styled.div`
display:flex;
justify-content:space-between;
`
const Filter=styled.div`
margin:20px;
${mobile({
    margin:"0px 20px",
    display:"flex",
    flexDirection:"column"
  })}
`
const FilterText=styled.span`
font-size:20px;
font-weight:600;
margin-right:20px;
${mobile({
    marginRight:"0px"
  })}
`
const Select=styled.select`
padding:10px;
margin-right:20px;
${mobile({
    margin:"10px 0px"
  })}
`
const Option=styled.option``

function ProductList() {

  const [products,setProducts] = useState([])

  //To display all products
  const getAllProduct=async()=>{
    try{
      const result = await axios.get('http://localhost:8000/getall-products')
      setProducts(result.data.data)
    }catch(err){
      console.log(err);
    }
  }
  

  useEffect(()=>{
    getAllProduct()
  },[])
  return (
    <Container>
        <Navbar/>
        <Announcements/>
        <Title>All Products</Title>
        <Products item={products}/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList