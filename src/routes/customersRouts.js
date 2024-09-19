import { Router } from "express";
import {getCustomers} from "../controllers/customersController.js";

const router = new Router();

router.get("/cutomers", getCustomers);

export default router