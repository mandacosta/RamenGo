import {Prisma, Protein} from '@prisma/client'
import {Decimal} from 'decimal.js'
import {IProteinsRepository} from '@/repositories/interfaces/interface-proteins-repository'
import { randomUUID } from 'crypto'

export class InMemoryProteinsRepository implements IProteinsRepository{
    public repository: Protein[] = []
    async createMany(data: Prisma.ProteinCreateManyInput[]){
        data.forEach((protein_) => {
            const protein = {
                id: protein_.id || randomUUID(),
                imageInactive: protein_.imageInactive,
                imageActive: protein_.imageActive,
                name: protein_.name,
                description: protein_.description,
                price: new Decimal(`${protein_.price}`)
            }

            this.repository.push(protein)
        })
        
    }

    async findMany(){
        return this.repository
    }
}