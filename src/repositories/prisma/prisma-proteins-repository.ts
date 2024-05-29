import {Prisma} from '@prisma/client'
import {IProteinsRepository} from '@/repositories/interfaces/interface-proteins-repository'
import {prisma} from '@/libs/prisma'

export class PrismaProteinsRepository implements IProteinsRepository{
    async createMany(data: Prisma.ProteinCreateManyInput[]){
        await prisma.protein.createMany({
            data
        })
        
    }

    async findMany(){
        const proteins = await prisma.protein.findMany()
        return proteins
    }
}