import {Broth, Prisma} from '@prisma/client'

export interface IBrothsRepository {
    createMany(data: Prisma.BrothCreateManyInput[]): Promise<void>
    findMany(): Promise<Broth[]>
}