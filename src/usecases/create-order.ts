import { IMenusRepository } from "@/repositories/interfaces/interface-menus-repository";
import { IOrdersRepository } from "@/repositories/interfaces/interface-orders-repository";
import { IGenerateOrderId } from "@/services/generateOrderId/interface-generateOrderId";
import { CouldNotPlaceOrderError } from "./errors/could-not-place-order-error";
import { ProteinIdAndBrothIdRequired } from "./errors/brothId-and-proteinId-required-error";

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
            throw new ProteinIdAndBrothIdRequired()
        }

        const menu = await this.menusRepository.findByProteinIdAndBrothId(data.proteinId, data.brothId)
        const {orderId} = await this.generateOrderIdServie.generate()

        if(!orderId){
            throw new CouldNotPlaceOrderError()
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