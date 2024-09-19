import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllCustomers = async () => {
    return await prisma.customers.findMany();
}