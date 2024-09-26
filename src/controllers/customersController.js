import {createCustomer, deleteCustomer, getAllCustomers, getCustomersById, updateCustomer} from "../services/customersServices.js";

export const getCustomers = async(req, res) => {
    try{
        const customer = await getAllCustomers();
        res.json(customer);
    }
    catch(error){
        res.status(500).json({
            error: "Erro ao busca produtos",
        });
    }
}

export const createCustomerController = async(req, res) => {
    try{
        const newCustomer = await createCustomer(req.body);
        res.status(201).json(newCustomer);
    }catch(error){
        console.error(error);
        res.status(500).json({
            error: "Erro ao criar Customer", details : error.message
        });
    }
}

export const getCustomer = async(req, res) => {
    try{
        const customer = await getCustomersById(req.params.id);
        if(customer){
            res.json(customer);
        }else{
            req.status(500).json({error: "Customer não encontrado"});
        }
    }catch(error){
        req.status(500).json({error: "Erro ao buscar customer"});
    }
}

export const updateCustomerController = async(req, res) => {
    try{
        const customer = await updateCustomer(req.params.id, req.body);
        res.json(customer);
    }catch(error){
        res.status(500).json({error: "Erro ao atualizar customer"});
    }
}

export const deleteCustomerController = async(req, res) => {
    try{
        await deleteCustomer(req.params.id);
        res.json(204).send();
    }catch(error){
        res.status(500).json({error: "Erro ao deletar customer"});
    }
}