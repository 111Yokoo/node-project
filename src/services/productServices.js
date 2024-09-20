import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllProducts = async () => {
    return await prisma.product.findMany();
}
export const createProduct = async (productData) => {
    return await prisma.product.create({
        data: productData,
    });
}
export const getProductById = async (id) => {
    return await prisma.product.findUnique({
        where: {id: parseInt(id)},
    });
}