import {broths, proteins, menus} from './mock_data'
import {PrismaBrothsRepository} from '@/repositories/prisma/prisma-broths-repository'
import {PrismaProteinsRepository} from '@/repositories/prisma/prisma-proteins-repository'
import {PrismaMenusRepository} from '@/repositories/prisma/prisma-menus-repository'

import {CreateBrothsUseCase} from '@/usecases/create-broths'
import {CreateProteinsUseCase} from '@/usecases/create-proteins'
import {CreateMenusUseCase} from '@/usecases/create-menus'

import {ListBrothsUseCase} from '@/usecases/list-broths'

async function main() {
    const brothsRepository = new PrismaBrothsRepository()
    const listBrothsUseCase = new ListBrothsUseCase(brothsRepository)
    const brothsList = await listBrothsUseCase.execute()

    if(!brothsList.length){
        const createBrothsUseCase = new CreateBrothsUseCase(brothsRepository)
    
        const proteinsRepository = new PrismaProteinsRepository()
        const createProteinsUseCase = new CreateProteinsUseCase(proteinsRepository)
    
        const menusRepository = new PrismaMenusRepository()
        const createMenusUseCase = new CreateMenusUseCase(menusRepository)
    
        await createBrothsUseCase.execute(broths)
        await createProteinsUseCase.execute(proteins)
        await createMenusUseCase.execute(menus)
    }else{
        console.log("Seeds already planted!")
    }    
}

main().then(() => {
    console.log("Seeds ok!")
}).catch((error) => {
    console.error(error)
})