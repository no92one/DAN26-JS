import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

const products = [
  {
    "id": 1,
    "name": "Hammare",
    "price": 200
  },
  {
    "id": 2,
    "name": "Såg",
    "price": 500
  },
  {
    "id": 3,
    "name": "Spik - 50 st",
    "price": 20
  },
  {
    "id": 478,
    "name": "Spik - 200 st",
    "price": 50
  }
];

app.get("/", (request, response) => {
  response.send("Server är uppe!");
});

app.get("/products", (request, response) => {
  response.json(products);
});

app.get("/products/:product_id", (request, response) => {
  const product_id = Number(request.params.product_id);

  console.log(typeof product_id);
  console.log(product_id);

  if (isNaN(product_id)) {
    response.status(400).json({ message: `'${request.params.product_id}' är inte ett giltigt produkt id!'` });
  }

  const product = products.find(element => element.id == product_id);

  if (!product) {
    response.status(400).json({ message: `Det finns ingen produkt med id = '${product_id}'!` });
  }

  response.json(product);
});

app.listen(port, () => {
  console.log(`Server har startat, gå till http://localhost:${port}/ för att komma till servern.`);
});