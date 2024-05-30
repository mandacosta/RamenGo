import { PrismaMenusRepository } from "@/repositories/prisma/prisma-menus-repository";
import { PrismaOrdersRepository } from "@/repositories/prisma/prisma-orders-repository";
import { APIGenerateOrderId } from "@/services/generateOrderId/api-generateOrderId";
import { CreateOrderUseCase } from "../create-order";

export function makeCreateOrderUseCase(){
    const menusRepository = new PrismaMenusRepository()
    const orderRepository = new PrismaOrdersRepository()
    const generateOrderIdService = new APIGenerateOrderId()
    const sut = new CreateOrderUseCase(orderRepository, menusRepository, generateOrderIdService)

    return sut
}