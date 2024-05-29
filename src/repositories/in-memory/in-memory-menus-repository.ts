import {Prisma, Menu} from '@prisma/client'
import {IMenusRepository} from '@/repositories/interfaces/interface-menus-repository'
import { randomUUID } from 'crypto'

export class InMemoryMenusRepository implements IMenusRepository{
    public repository: Menu[] = []
    async createMany(data: Prisma.MenuCreateManyInput[]){
        data.forEach((menu_) => {
            const menu = {
                id: menu_.id || randomUUID(),
                broth_id: menu_.broth_id,
                protein_id: menu_.protein_id,
                description: menu_.description,
                image: menu_.image              
            }

            this.repository.push(menu)
        })
        
    }

    async findByProteinIdAndBrothId(proteinId: string, brothId: string){
        const menu = this.repository.find((menu_) => {
            return menu_.broth_id === brothId && menu_.protein_id === proteinId
        })

        if(menu){
            return menu
        }

        return null
    }
}