import { IProduct } from "../model/IProduct";


export default function Header({ products }: { products: IProduct[] }) {
    return <h1>Header [{products.length}]</h1>;
}
  