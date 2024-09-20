import { Router } from "express";
import { createProductController, getProducts ,getProduct} from "../controllers/productController.js";

const router = new Router();

router.get("/products", getProducts);
router.get("/products:id", getProduct);
router.post("/products", createProductController);

export default router;