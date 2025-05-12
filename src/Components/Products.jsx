import { useState } from "react"





const Products = (props) => {
    let [products, setProducts] = useState( 
        {'Audi a3':10000,
        'BMW X4':21500,
        'VW Passat CC':11300}
    )

    let [newProductName, setNewProductName] = useState();
    let [newProductPrice, setNewProductPrice] = useState();


const addProduct = () => {
    setProducts(products => ({
        ...products,
        [newProductName]:parseInt([newProductPrice])
    }));
}

    return (
       <>
     
       { Object.entries(products).map(([car, price]) => (
         <p key={car}>{car} - {price}€, with tax: {CalculateTax(price, props.tax)}€</p>
       ))}

       <button style={{marginBottom:"1rem"}} onClick={ () => setProducts({})}>Delete Car</button>

      

       <div>
        <input onInput={e => setNewProductName(e.target.value)} type="text" placeholder="Unesite ime automobila"></input>
        <input onInput={e => setNewProductPrice(e.target.value)} type="number" placeholder="Unesite cenu automobila"></input>
        <button onClick={addProduct}>Dodaj automobil</button>
        
       </div>

       </>
    )
    
}

const CalculateTax = (price,tax) => {
    return (price*tax)/100+price
}

export default Products;