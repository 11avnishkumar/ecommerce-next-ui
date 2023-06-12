import { Card, Grid, Row, Text, Spacer, Button } from "@nextui-org/react";
import { faker } from '@faker-js/faker';
import { useContext, useState } from "react";
import { cartContext } from "../../context/Context";
export default function Proucts() {
  const productArray = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.commerce.image
  }))
  const {handleAddToCart,removeCartHandler} = useContext(cartContext)
  const [products] = useState(productArray);
  return (
    <Grid.Container gap={2} justify="flex-start">
      {products.map((product) => (
        <Grid xs={12} sm={6} md={4} key={product.id}>
          <Card isPressable css={{p:"$4", h: "400px" }}>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                src={"https://nextui.org" + product.image}
                objectFit="cover"
                width="100%"
                height={140}
                alt={product.name}
              />
            </Card.Body>
            <Card.Footer>
              <Row wrap="wrap" justify="space-between" align="center">
                <Text b>{product.name}</Text>
                <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                  {product.price}
                </Text>
              </Row>
            </Card.Footer>
            <Button onClick={() => handleAddToCart(product)}>Add to cart</Button>
            <Spacer y={1}/>
            <Button onClick={() => removeCartHandler(product)}>Remove to cart</Button>
          </Card>
        </Grid>
      ))}
    </Grid.Container>
  );
}
