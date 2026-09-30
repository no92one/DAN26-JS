import express from "express"
import cors from "cors"
import mysql from "mysql2/promise"

const db = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "webbshop"
});

const app = express()
const port = 3000

app.use(express.json())
app.use(cors())

app.get("/products", async (request, response) => {

    const [products] = await db.query("SELECT * FROM products")

    response.json(products)
})

app.get("/products/:product_id", async (request, response) => {
    const product_id = request.params.product_id

    const [products] = await db.query("SELECT * FROM products WHERE id = ?", [product_id])

    response.json(products[0])
})

app.listen(port, () => {
    console.log(`Server är igång, du hittar den på http://localhost:${port}`)
})
