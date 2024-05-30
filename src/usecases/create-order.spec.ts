import { IBrothsRepository } from "@/repositories/interfaces/interface-broths-repository"
import { beforeAll, describe, expect, it } from "vitest"
import { CreateBrothsUseCase } from "./create-broths"
import { ListBrothsUseCase } from "./list-broths"
import { IProteinsRepository } from "@/repositories/interfaces/interface-proteins-repository"
import { CreateProteinsUseCase } from "./create-proteins"
import { ListProteinsUseCase } from "./list-proteins"
import { IMenusRepository } from "@/repositories/interfaces/interface-menus-repository"
import { IOrdersRepository } from "@/repositories/interfaces/interface-orders-repository"
import { CreateOrderUseCase } from "./create-order"
import { InMemoryBrothsRepository } from "@/repositories/in-memory/in-memory-broths-repository"
import { InMemoryProteinsRepository } from "@/repositories/in-memory/in-memory-proteins-repository"
import { InMemoryMenusRepository } from "@/repositories/in-memory/in-memory-menus-repository"
import { broths, menus, proteins } from "@/utils/mock_data"
import { InMemoryOrdersRepository } from "@/repositories/in-memory/in-memory-orders-repository"
import { IGenerateOrderId } from "@/services/generateOrderId/interface-generateOrderId"
import { APIGenerateOrderId } from "@/services/generateOrderId/api-generateOrderId"

let brothsRepository: IBrothsRepository
let createBrothsUseCase: CreateBrothsUseCase
let listBrothsUseCase: ListBrothsUseCase

let proteinsRepository: IProteinsRepository
let createProteinsUseCase: CreateProteinsUseCase
let listProteinsUseCase: ListProteinsUseCase

let menusRepository: IMenusRepository

let ordersRepository: IOrdersRepository
let generateOrderIdService: IGenerateOrderId
let sut: CreateOrderUseCase


describe('Create Order use-case', () => {
    beforeAll( async () => {
        brothsRepository = new InMemoryBrothsRepository()
        createBrothsUseCase = new CreateBrothsUseCase(brothsRepository)
        listBrothsUseCase = new ListBrothsUseCase(brothsRepository)
        await createBrothsUseCase.execute(broths)

        proteinsRepository = new InMemoryProteinsRepository()
        createProteinsUseCase = new CreateProteinsUseCase(proteinsRepository)
        listProteinsUseCase = new ListProteinsUseCase(proteinsRepository)
        await createProteinsUseCase.execute(proteins)

        menusRepository = new InMemoryMenusRepository()
        await menusRepository.createMany(menus)

        ordersRepository = new InMemoryOrdersRepository()
        generateOrderIdService = new APIGenerateOrderId()
        sut = new CreateOrderUseCase(ordersRepository, menusRepository, generateOrderIdService)
    })

    it('should properly place an order', async () => {

        const brothsList = await listBrothsUseCase.execute()
        const brothId = brothsList[0].id

        const proteinsList = await listProteinsUseCase.execute()
        const proteinId = proteinsList[0].id

        const order = await sut.execute({brothId, proteinId})

        expect(order.description).toEqual('Shoyu with Pork')
    })
})