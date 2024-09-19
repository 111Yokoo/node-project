import { Router } from "express";
import { getProducts } from "../controllers/productController.js";

const router = new Router();

router.get("/products", getProducts);

export default router;