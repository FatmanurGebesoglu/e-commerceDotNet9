import { IProduct } from "../model/IProduct";
import Product from "./Product";

export default function ProductList({ products, addProduct }: { products: IProduct[]; addProduct: () => void }) {
  return (
    <div>
    <h2>Product List</h2>
    {products.map((p) => (
      <Product key={p.id} product={p} />
    ))}
    <button onClick={addProduct}>Add Product</button>
  </div>
  );
}
