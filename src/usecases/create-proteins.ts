import { IProteinsRepository } from "@/repositories/interfaces/interface-proteins-repository";

interface CreateProteinsUseCaseRequest{
    id?: string
    imageInactive: string
    imageActive: string
    name: string
    description: string
    price: number
}

export class CreateProteinsUseCase{
    constructor(private proteinsRepository: IProteinsRepository){

    }

    async execute(data: CreateProteinsUseCaseRequest[]): Promise<void> {
        await this.proteinsRepository.createMany(data)
    }
}