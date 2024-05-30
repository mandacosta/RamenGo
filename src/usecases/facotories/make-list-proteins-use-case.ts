import { PrismaProteinsRepository } from "@/repositories/prisma/prisma-proteins-repository";
import { ListProteinsUseCase } from "../list-proteins";

export function makeListProteinsUseCase(){
    const proteinsRepository = new PrismaProteinsRepository()
    const sut = new ListProteinsUseCase(proteinsRepository)

    return sut
}