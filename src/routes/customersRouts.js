import { Router } from "express";
import {createCustomerController, deleteCustomerController, getCustomer, getCustomers, updateCustomerController} from "../controllers/customersController.js";

const router = new Router();

router.get("/customers", getCustomers);
router.get("/customers/:id", getCustomer);
router.post("/customers", createCustomerController);
router.patch("/customers/:id", updateCustomerController);
router.delete("/customers/:id", deleteCustomerController);

export default router