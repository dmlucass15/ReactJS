import {useEffect, useState} from 'react'
import ItemList from './ItemList'

const ItemListConteiner = ({greeting}) => {
  
  const productos = async ()=> {
  
  const response = await fetch ("https://fakestoreapi.com/products")
  const data = await response.json()

    return data
  }

  const [product, setproduct]= useState([]) 

useEffect(()=>{

  productos().then ((product)=> setproduct(product))

}, []) 


  return (
    <>
    <h1>{greeting}</h1>
    < ItemList product={product} />
    </>
  )
}

export default ItemListConteiner