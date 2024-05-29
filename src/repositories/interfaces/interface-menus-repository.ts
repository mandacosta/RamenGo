import {Menu, Prisma} from '@prisma/client'

export interface IMenusRepository {
    createMany(data: Prisma.MenuCreateManyInput[]): Promise<void>
    findByProteinIdAndBrothId(proteinId: string, brothId: string): Promise<Menu | null>
}