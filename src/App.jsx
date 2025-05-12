import { useState } from "react"
import Products from "./Components/Products"


let name = "Audi"

const App =  ()  =>{
    let[btnName, setBtnName] = useState(name)
    let [tax, setTax] = useState(0)

  return (
    <>
      <Products tax={tax}/>
      <br/>
      <input placeholder="Taksa za auto u %" onInput={ e => setTax(e.target.value) } type="number" />
    </>
  )
}



export default App
