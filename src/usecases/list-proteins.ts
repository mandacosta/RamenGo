import { IProteinsRepository } from "@/repositories/interfaces/interface-proteins-repository";
import { z } from "zod";

interface IProtein{
    id: string
    imageInactive: string
    imageActive: string
    name: string
    description: string
    price: number
}

const proteinObject = z.object({
    id: z.string(),
    imageInactive: z.string(),
    imageActive: z.string(),
    name: z.string(),
    description: z.string(),
    price: z.coerce.number()
})

const response = z.array(proteinObject)

export class ListProteinsUseCase{
    constructor(private brothsRepository: IProteinsRepository){

    }

    async execute(): Promise<IProtein[]> {
        const proteins = await this.brothsRepository.findMany()

        const proteinsParsed = response.parse(proteins)
        return proteinsParsed
    }
}