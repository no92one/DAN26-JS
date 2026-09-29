import express from "express";
import cors from "cors";
import mysql from "mysql2/promise";

const db = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "webshop"
});

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get("/", (request, response) => {
  response.send("Server är uppe!");
});

app.get("/products", async (request, response) => {
  const [products] = await db.query("SELECT * FROM products");

  response.json(products);
});

app.get("/products/:product_id", async (request, response) => {
  const product_id = Number(request.params.product_id);

  if (isNaN(product_id)) {
    response.status(400).json({ message: `'${request.params.product_id}' är inte ett giltigt produkt id!'` });
  }

  const [product] = await db.query("SELECT * FROM products WHERE id = ?", [product_id]);

  if (product.length == 0) {
    response.status(400).json({ message: `Det finns ingen produkt med id = '${product_id}'!` });
  }

  response.json(product[0]);
});

app.listen(port, () => {
  console.log(`Server har startat, gå till http://localhost:${port}/ för att komma till servern.`);
});