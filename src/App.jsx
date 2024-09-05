import { useState } from "react"
import ProductList from "./ProductList"
import Search from "./Search"


function App() {

  const [search,setSearch] = useState("")
  return (
    <div>
       <Search setSearch={setSearch} search={search}/>
       <ProductList search={search}/>
    </div>
 
  )
}

export default App
