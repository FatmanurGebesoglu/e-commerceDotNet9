import { AppBar, Container, Toolbar, Typography } from "@mui/material";
//import { IProduct } from "../model/IProduct";


export default function Header() {
    return (
        <AppBar position="static" sx={{mb:4}}>
            <Toolbar>
                <Container>
                <Typography variant="h6">E-Commerce</Typography>
                </Container>
            </Toolbar>
        </AppBar>
    );
}
  



//Header({ products }: { products: IProduct[] }) ----------------------->props kullanımı
//<h1>Header [{products.length}]</h1>;