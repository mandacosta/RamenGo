import { PrismaBrothsRepository } from "@/repositories/prisma/prisma-broths-repository";
import { ListBrothsUseCase } from "../list-broths";

export function makeListBrothsUseCase(){
    const brothsRepository = new PrismaBrothsRepository()
    const sut = new ListBrothsUseCase(brothsRepository)

    return sut
}