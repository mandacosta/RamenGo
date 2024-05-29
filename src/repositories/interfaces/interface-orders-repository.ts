import {Order, Prisma} from '@prisma/client'

export interface IOrdersRepository {
    create(data: Prisma.OrderUncheckedCreateInput): Promise<Order>
}