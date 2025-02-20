import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import {AddShoppingCart} from "@mui/icons-material";
import SearchIcon from '@mui/icons-material/Search';
import { IProduct } from "../model/IProduct";

export default function Product(props: { product: IProduct }) {
  return (
    <Card>
      <CardMedia
        sx={{ height: 160, backgroundSize: "contain" }}
        image={`http://localhost:5171/images/${props.product.imageUrl}`} />
      <CardContent>
        <Typography gutterBottom variant="h6" component="h2" color="text-secondary">
          {props.product.name}
        </Typography>
        <Typography variant="body2" color="secondary">
          {(props.product.price/100).toFixed(2)} ₺
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" disableElevation size="small" startIcon={<AddShoppingCart/>} color="success" >Add to Cart </Button>
        <Button variant="outlined" size="small" startIcon={<SearchIcon/>} color="primary" > View </Button>
      </CardActions>
    </Card>
  );
}

//   <>
//   {
//     props.product.isActive && (
//       <div>
//         <h3>{props.product.name} </h3>
//         <p> {props.product.price}</p>
//         <p>{props.product.description}</p>
//         <p>{props.product.stock}</p>
//       </div>)
//   }
// </>