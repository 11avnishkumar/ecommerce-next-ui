import { Container } from "@nextui-org/react";
import Header from "./Components/Header/Header";
import Products from "./Components/Products/Products";
import SingleProducts from "./Components/SingleProducts/SingleProducts";

export default function App() {
  return (
    <>
      <Header />
      <Products />
      <SingleProducts />
    </>
  );
}
