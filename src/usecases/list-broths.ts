import { IBrothsRepository } from "@/repositories/interfaces/interface-broths-repository";
import { Broth } from "@prisma/client";


export class ListBrothsUseCase{
    constructor(private brothsRepository: IBrothsRepository){

    }

    async execute(): Promise<Broth[]> {
        const broths = await this.brothsRepository.findMany()
        return broths
    }
}