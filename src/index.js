import express from "express";
import productRoutes from "./routes/productRouts.js";

const app = express();
app.use(express.json());
app.use(productRoutes);

app.listen(3000, () => {
  console.log(`Servidor rodando na porta 3000`);
});
