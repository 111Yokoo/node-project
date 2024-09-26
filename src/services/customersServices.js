import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllCustomers = async () => {
    return await prisma.customers.findMany();
}
export const createCustomer = async (customersData) => {
    return await prisma.customers.create({
        data: customersData,
    });
}

export const getCustomersById = async (id) => {
    return await prisma.customers.findUnique({
        where: {id : parseInt(id)},
    });
}

export const updateCustomer = async (id, customersData) => {
    return await prisma.customers.update({
        where: {id : parseInt(id)},
        data: customersData,
    });
}

export const deleteCustomer = async (id) =>{
    return await prisma.customers.delete({
        where: {id: parseInt(id)}
    });
}