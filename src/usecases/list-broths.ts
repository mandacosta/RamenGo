import { IBrothsRepository } from "@/repositories/interfaces/interface-broths-repository";
import { z } from "zod";

interface IBroth{
    id: string
    imageInactive: string
    imageActive: string
    name: string
    description: string
    price: number
}

const brothObject = z.object({
    id: z.string(),
    imageInactive: z.string(),
    imageActive: z.string(),
    name: z.string(),
    description: z.string(),
    price: z.coerce.number()
})

const response = z.array(brothObject)


export class ListBrothsUseCase{
    constructor(private brothsRepository: IBrothsRepository){

    }

    async execute(): Promise<IBroth[]> {
        const broths = await this.brothsRepository.findMany()

        const brothsParsed = response.parse(broths)
        return brothsParsed
    }
}