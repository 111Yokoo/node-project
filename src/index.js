import express from "express";
import productRoutes from "./routes/productRouts.js";
import customersRoutes from "./routes/customersRouts.js";

const app = express();
app.use(express.json());
app.use(productRoutes);
app.use(customersRoutes);

app.listen(3000, () => {
  console.log(`Servidor rodando na porta 3000`);
});
