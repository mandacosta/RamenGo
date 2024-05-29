import {Protein, Prisma} from '@prisma/client'

export interface IProteinsRepository {
    createMany(data: Prisma.ProteinCreateManyInput[]): Promise<void>
    findMany(): Promise<Protein[]>
}