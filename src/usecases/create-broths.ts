import { IBrothsRepository } from "@/repositories/interfaces/interface-broths-repository";

interface CreateBrothsUseCaseRequest{
    id?: string
    imageInactive: string
    imageActive: string
    name: string
    description: string
    price: number
}

export class CreateBrothsUseCase{
    constructor(private brothsRepository: IBrothsRepository){

    }

    async execute(data: CreateBrothsUseCaseRequest[]): Promise<void> {
        await this.brothsRepository.createMany(data)
    }
}