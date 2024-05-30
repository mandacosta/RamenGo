import { expect, describe, it, beforeAll } from 'vitest'
import { proteins } from '@/utils/mock_data'
import { InMemoryProteinsRepository } from '@/repositories/in-memory/in-memory-proteins-repository'
import { CreateProteinsUseCase } from './create-proteins'
import { IProteinsRepository } from '@/repositories/interfaces/interface-proteins-repository'
import { ListProteinsUseCase } from './list-proteins'

let proteinsRepository: IProteinsRepository
let createProteinsUseCase: CreateProteinsUseCase
let sut: ListProteinsUseCase


describe('List proteins use-case', () => {
    beforeAll( async () => {
        proteinsRepository = new InMemoryProteinsRepository()
        createProteinsUseCase = new CreateProteinsUseCase(proteinsRepository)
        sut = new ListProteinsUseCase(proteinsRepository)

        // Seed InMemory repo
        await createProteinsUseCase.execute(proteins)
    })

    it('should list all existing proteins', async () => {
        const proteinsList = await sut.execute()
        
        expect(proteinsList).toHaveLength(3)


    })
})