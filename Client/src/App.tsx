import { useEffect, useState } from "react";
import { IProduct } from "./model/IProduct";

function App() {
  return (
    <>
      <Header />
      <ProductList />
    </>
  )
}

function Header() {
  return (
    <h1>Header</h1>
  );
}

function ProductList() {

  const [products, setProducts] = useState<IProduct[]>(
    []
  );

  useEffect(() => {
    fetch("http://localhost:5171/api/products")
      .then(response => response.json())
      .then(data => setProducts(data))
  }, []);

  function addProduct() {
    setProducts([...products, { 
      id: Date.now(), 
      name: "product 4", 
      price: 4000, 
      isActive: true
     }])
  }

  return (
    <div>
      <h2>Product List</h2>
      {products.map(p => (
        <Product key={p.id} product={p} />
      ))}


      <button onClick={addProduct}>Add Product</button>

    </div>
  );
}

function Product(props: {product: IProduct}) {
  return (
    <>
      {
        props.product.isActive ? (
          <div>
            <h3>{props.product.name} </h3>
            <p> {props.product.price}</p>
            <p>{props.product.description}</p>
            <p>{props.product.stock}</p>
          </div>) :
          <p>
            <h3>{props.product.name} </h3> <b>ürün satışta değil</b>
          </p>
      }
    </>
  );
}




export default App
