import React from 'react'
import { useState,useEffect } from 'react'


export default function ProductList(props) {
    
    const {search,} = props
    const [product,setProduct] = useState([])

    const fetchAllData = async () => {
        const resp = await fetch('https://dummyjson.com/products')
        const result = await resp.json()
        console.log(result)
        setProduct(result.products)
    } 
    const fetchDataBySearch = async (data) => {
        const resp = await fetch(`https://dummyjson.com/products/search?q=${data}`)
        const result = await resp.json()
        console.log(result)
        setProduct(result.products)
    } 

    useEffect( ()=>{
        if(search){
            fetchDataBySearch(search)
        } else {

            fetchAllData()
        }
    },[search])

    console.log(search)

  return (

    <div>{product.map((el)=>{
        return <p>{el.title}</p> 
    })}</div>
  )
}
