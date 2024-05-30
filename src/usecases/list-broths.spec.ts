import { expect, describe, it, beforeAll } from 'vitest'
import { broths } from '@/utils/mock_data'
import { IBrothsRepository } from '@/repositories/interfaces/interface-broths-repository'
import { CreateBrothsUseCase } from './create-broths'
import { ListBrothsUseCase } from './list-broths'
import { InMemoryBrothsRepository } from '@/repositories/in-memory/in-memory-broths-repository'

let brothsRepository: IBrothsRepository
let createBrothsUseCase: CreateBrothsUseCase
let sut: ListBrothsUseCase


describe('List broths use-case', () => {
    beforeAll( async () => {
        brothsRepository = new InMemoryBrothsRepository()
        createBrothsUseCase = new CreateBrothsUseCase(brothsRepository)
        sut = new ListBrothsUseCase(brothsRepository)

        // Seed InMemory repo
        await createBrothsUseCase.execute(broths)
    })

    it('should list all existing broths', async () => {
        const brothsList = await sut.execute()
        
        expect(brothsList).toHaveLength(4)
    })
})