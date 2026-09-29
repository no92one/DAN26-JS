import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const dishes = [
  {
    "name": "Köttbullar med potatismos",
    "price": 120,
  },
  {
    "name": "Burgare med pommes",
    "price": 150,
  },
  {
    "name": "Cessar Sallad",
    "price": 110,
  }
];

app.get("/api", (request, response) => {
  response.send("Hello World!");
});

app.get("/api/dishes", (request, response) => {
  response.json(dishes);
});

app.get("/api/dishes/:dish_id", (request, response) => {
  const id = parseInt(request.params.dish_id);

  if (isNaN(id)) {
    return response.status(400).json({
      message: `Du skicka in "${request.params.dish_id}" för dish_id, men det måste vara ett nummer!`
    });
  }

  if (id >= 0 && id < dishes.length) {
    return response.status(200).json(dishes[id]);
  }

  return response.status(404).json({
    message: `Det finns ingen rätt med det id ${id}.`
  });

});

app.listen(port, () => {
  console.log(`Server är igång, du hittar den på: http://localhost:${port}`);
});