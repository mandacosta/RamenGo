import {Prisma, Order} from '@prisma/client'
import {IOrdersRepository} from '@/repositories/interfaces/interface-orders-repository'

export class InMemoryOrdersRepository implements IOrdersRepository{
    public repository: Order[] = []
    async create(data: Prisma.OrderUncheckedCreateInput){
        const order = {
            id: data.id,
            protein_id: data.protein_id,
            broth_id: data.broth_id
        }

        this.repository.push(order)

        return order      
    }
}