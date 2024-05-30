import { IMenusRepository } from "@/repositories/interfaces/interface-menus-repository";
import { IOrdersRepository } from "@/repositories/interfaces/interface-orders-repository";
import { IGenerateOrderId } from "@/services/generateOrderId/interface-generateOrderId";

interface CreateOrderUseCaseRequest{
    proteinId: string,
    brothId: string
}

interface CreateOrderUseCaseResponse{
    id: string,
    description: string,
    image: string
}

const defaultMenu = {
    description: 'Very tasty ramen',
    image: 'https://tech.redventures.com.br/icons/ramen/ramenChasu.png'
}

export class CreateOrderUseCase{
    constructor(
        private ordersRepository: IOrdersRepository, 
        private menusRepository: IMenusRepository,
        private generateOrderIdServie: IGenerateOrderId
    ){

    }

    async execute(data: CreateOrderUseCaseRequest): Promise<CreateOrderUseCaseResponse>{

        if(!data.brothId || !data.proteinId){
            throw new Error("both brothId and proteinId are required")
        }

        const menu = await this.menusRepository.findByProteinIdAndBrothId(data.proteinId, data.brothId)
        const {orderId} = await this.generateOrderIdServie.generate()

        if(!orderId){
            throw new Error("could not place order")
        }

        const order = {
            id: orderId,
            broth_id: data.brothId,
            protein_id: data.proteinId
        }

        const orderResponse = {
            id: orderId,
            description: menu ? menu.description : defaultMenu.description,
            image: menu ? menu.image : defaultMenu.image
        }

        await this.ordersRepository.create(order)

        return orderResponse
    }
}