import React from 'react'

export default function Search(props) {

    const {search,setSearch} = props



  const hdlChange =(e) =>{
    setSearch(e.target.value)
    console.log(e)
  }
  return (
    <div>
        <h1>Product List</h1>
        <input type="text" value={search} onChange={hdlChange}/>
    </div>
  )
}
