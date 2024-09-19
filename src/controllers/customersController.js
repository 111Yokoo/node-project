import {getAllCustomers} from "../services/customersServices.js";

export const getCustomers = async(req, res) => {
    try{
        const customers = await getAllCustomers();
        res.json(customers);
    }
    catch(error){
        res.status(500).json({
            error: "Erro ao busca produtos",
        })
    }
}