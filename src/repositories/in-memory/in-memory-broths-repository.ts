import {Prisma, Broth} from '@prisma/client'
import {Decimal} from 'decimal.js'
import {IBrothsRepository} from '@/repositories/interfaces/interface-broths-repository'
import { randomUUID } from 'crypto'

export class InMemoryBrothsRepository implements IBrothsRepository{
    public repository: Broth[] = []
    async createMany(data: Prisma.BrothCreateManyInput[]){
        data.forEach((broth_) => {
            const broth = {
                id: broth_.id || randomUUID(),
                imageInactive: broth_.imageInactive,
                imageActive: broth_.imageActive,
                name: broth_.name,
                description: broth_.description,
                price: new Decimal(`${broth_.price}`)
            }

            this.repository.push(broth)
        })
        
    }

    async findMany(){
        return this.repository
    }
}