import {getAllProducts} from "../services/productServices.js";

export const getProducts = async(req, res) => {
    try{
        const products = await getAllProducts();
        res.json(products);
    }
    catch(error){
        res.status(500).json({
            error: "Erro ao buscar produtos",
        })
    }
}
