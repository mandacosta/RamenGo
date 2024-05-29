import {Prisma} from '@prisma/client'
import {IMenusRepository} from '@/repositories/interfaces/interface-menus-repository'
import {prisma} from '@/libs/prisma'

export class PrismaMenusRepository implements IMenusRepository{
    async createMany(data: Prisma.MenuCreateManyInput[]){
        await prisma.menu.createMany({
            data
        })
        
    }

    async findByProteinIdAndBrothId(proteinId: string, brothId: string){
        const menu = await prisma.menu.findFirst({
            where: {
                broth_id: brothId,
                protein_id: proteinId
            }
        })

        return menu
    }
}