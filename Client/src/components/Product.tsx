import { IProduct } from "../model/IProduct";

export default function Product(props: { product: IProduct }) {
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