import {Prisma} from '@prisma/client'
import {IBrothsRepository} from '@/repositories/interfaces/interface-broths-repository'
import {prisma} from '@/libs/prisma'

export class PrismaBrothsRepository implements IBrothsRepository{
    async createMany(data: Prisma.BrothCreateManyInput[]){
        await prisma.broth.createMany({
            data
        })
        
    }

    async findMany(){
        const broths = await prisma.broth.findMany()
        return broths
    }
}