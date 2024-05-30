import { IMenusRepository } from "@/repositories/interfaces/interface-menus-repository";

interface CreateMenusUseCaseRequest{
    id?: string
    broth_id: string
    protein_id: string
    description: string
    image: string 
}

export class CreateMenusUseCase{
    constructor(private menusRepository: IMenusRepository){

    }

    async execute(data: CreateMenusUseCaseRequest[]): Promise<void> {
        await this.menusRepository.createMany(data)
    }
}