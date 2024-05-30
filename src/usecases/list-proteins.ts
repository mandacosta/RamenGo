import { IProteinsRepository } from "@/repositories/interfaces/interface-proteins-repository";
import { Protein } from "@prisma/client";

export class ListProteinsUseCase{
    constructor(private brothsRepository: IProteinsRepository){

    }

    async execute(): Promise<Protein[]> {
        const proteins = await this.brothsRepository.findMany()
        return proteins
    }
}