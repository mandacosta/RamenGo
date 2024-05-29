import {Prisma} from '@prisma/client'
import {IOrdersRepository} from '@/repositories/interfaces/interface-orders-repository'
import {prisma} from '@/libs/prisma'

export class PrismaOrdersRepository implements IOrdersRepository{
    async create(data: Prisma.OrderUncheckedCreateInput){
        const order = await prisma.order.create({
            data
        })

        return order      
    }
}