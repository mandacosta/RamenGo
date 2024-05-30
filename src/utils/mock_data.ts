export const broths = [
    {
        id: 'aa9aafb9-a8af-47f5-a671-d2767899f525',
        imageInactive: 'https://tech.redventures.com.br/icons/salt/inactive.svg',
        imageActive: 'https://tech.redventures.com.br/icons/salt/active.svg',
        name: 'Shoyu',
        description: 'Traditional soy broth',
        price: 10.90
    },
    {
        id: '3f30d113-f665-40ed-a17f-826034b412ad',
        imageInactive: 'https://tech.redventures.com.br/icons/salt/inactive.svg',
        imageActive: 'https://tech.redventures.com.br/icons/salt/active.svg',
        name: 'Miso',
        description: 'Fermented soy paste broth',
        price: 9.50
    },
    {
        id: 'c40d30be-caf7-44e2-b5d5-f7b291577cd5',
        imageInactive: 'https://tech.redventures.com.br/icons/salt/inactive.svg',
        imageActive: 'https://tech.redventures.com.br/icons/salt/active.svg',
        name: 'Shio',
        description: 'Simple like the seawater, nothing more',
        price: 8
    },
    {
        id: '1ee9476c-8e9f-4476-9abe-3d85ff5cf296',
        imageInactive: 'https://tech.redventures.com.br/icons/salt/inactive.svg',
        imageActive: 'https://tech.redventures.com.br/icons/salt/active.svg',
        name: 'Tomkotsu',
        description: 'A thick, creamy broth made by boiling pork bones',
        price: 11
    }
]

export const proteins = [
    {
        id: '2a534ca1-f245-4c86-9317-08c8cca5cd0a',
        imageInactive: 'https://tech.redventures.com.br/icons/pork/inactive.svg',
        imageActive: 'https://tech.redventures.com.br/icons/pork/active.svg',
        name: 'Chashu',
        description: 'Pork',
        price: 12
    },
    {
        id: 'adf05f72-4a7d-4391-bde0-3b92ca5831e1',
        imageInactive: 'https://tech.redventures.com.br/icons/pork/inactive.svg',
        imageActive: 'https://tech.redventures.com.br/icons/pork/active.svg',
        name: 'Menma',
        description: 'Fermented Bamboo Shoot',
        price: 10
    },
    {
        id: '7e1277bb-7cb1-4c97-a909-61e4fa7f50ec',
        imageInactive: 'https://tech.redventures.com.br/icons/pork/inactive.svg',
        imageActive: 'https://tech.redventures.com.br/icons/pork/active.svg',
        name: 'Tori',
        description: 'Chicken',
        price: 11
    }
]

export const menus = [
    {
        id: '92fad723-0372-4eda-a906-648a1ec73b91',
        broth_id: 'aa9aafb9-a8af-47f5-a671-d2767899f525',
        protein_id: '2a534ca1-f245-4c86-9317-08c8cca5cd0a',
        description: 'Shoyu with Pork',
        image: 'https://tech.redventures.com.br/icons/ramen/ramenChasu.png' 
    },
    {
        id: '5fda9d4e-81f4-4277-9d6f-d99eab82de65',
        broth_id: 'aa9aafb9-a8af-47f5-a671-d2767899f525',
        protein_id: 'adf05f72-4a7d-4391-bde0-3b92ca5831e1',
        description: 'Shoyu with Menma',
        image: 'https://tech.redventures.com.br/icons/ramen/ramenChasu.png' 
    },
    {
        id: '110a029e-eaf9-4a36-87fb-54d61a4ca2b3',
        broth_id: 'aa9aafb9-a8af-47f5-a671-d2767899f525',
        protein_id: '7e1277bb-7cb1-4c97-a909-61e4fa7f50ec',
        description: 'Shoyu with Tori',
        image: 'https://tech.redventures.com.br/icons/ramen/ramenChasu.png' 
    },


    {
        id: 'a40088d6-b5c6-4646-8de4-80681c7be735',
        broth_id: '3f30d113-f665-40ed-a17f-826034b412ad',
        protein_id: '2a534ca1-f245-4c86-9317-08c8cca5cd0a',
        description: 'Miso with Pork',
        image: 'https://tech.redventures.com.br/icons/ramen/ramenChasu.png' 
    },
    {
        id: '3c02ffcb-156d-47cf-a0a7-5f48bc632449',
        broth_id: '3f30d113-f665-40ed-a17f-826034b412ad',
        protein_id: 'adf05f72-4a7d-4391-bde0-3b92ca5831e1',
        description: 'Miso with Menma',
        image: 'https://tech.redventures.com.br/icons/ramen/ramenChasu.png' 
    },
    {
        id: '71c4463f-3909-4b44-9cf9-761747a3ff44',
        broth_id: '3f30d113-f665-40ed-a17f-826034b412ad',
        protein_id: '7e1277bb-7cb1-4c97-a909-61e4fa7f50ec',
        description: 'Miso with Tori',
        image: 'https://tech.redventures.com.br/icons/ramen/ramenChasu.png' 
    },


    {
        id: '34e678e6-e8b7-4f5f-8624-ddab5df0ec7b',
        broth_id: 'c40d30be-caf7-44e2-b5d5-f7b291577cd5',
        protein_id: '2a534ca1-f245-4c86-9317-08c8cca5cd0a',
        description: 'Shio with Pork',
        image: 'https://tech.redventures.com.br/icons/ramen/ramenChasu.png' 
    },
    {
        id: 'e3d733cb-7fd5-4752-abda-07a2de3cc03e',
        broth_id: 'c40d30be-caf7-44e2-b5d5-f7b291577cd5',
        protein_id: 'adf05f72-4a7d-4391-bde0-3b92ca5831e1',
        description: 'Shio with Menma',
        image: 'https://tech.redventures.com.br/icons/ramen/ramenChasu.png' 
    },
    {
        id: 'cefd86e0-934c-438c-a8dc-bbbf0f09c1b0',
        broth_id: 'c40d30be-caf7-44e2-b5d5-f7b291577cd5',
        protein_id: '7e1277bb-7cb1-4c97-a909-61e4fa7f50ec',
        description: 'Shio with Tori',
        image: 'https://tech.redventures.com.br/icons/ramen/ramenChasu.png' 
    },


    {
        id: '1ce472ee-c12e-476e-a598-74d8f697c76a',
        broth_id: '1ee9476c-8e9f-4476-9abe-3d85ff5cf296',
        protein_id: '2a534ca1-f245-4c86-9317-08c8cca5cd0a',
        description: 'Tomkotsu with Pork',
        image: 'https://tech.redventures.com.br/icons/ramen/ramenChasu.png' 
    },
    {
        id: '9a192d93-2a4e-40e9-b840-9bf70243f80f',
        broth_id: '1ee9476c-8e9f-4476-9abe-3d85ff5cf296',
        protein_id: 'adf05f72-4a7d-4391-bde0-3b92ca5831e1',
        description: 'Tomkotsu with Menma',
        image: 'https://tech.redventures.com.br/icons/ramen/ramenChasu.png' 
    },
    {
        id: '057ddd58-66de-481f-97cf-47ebd446c774',
        broth_id: '1ee9476c-8e9f-4476-9abe-3d85ff5cf296',
        protein_id: '7e1277bb-7cb1-4c97-a909-61e4fa7f50ec',
        description: 'Tomkotsu with Tori',
        image: 'https://tech.redventures.com.br/icons/ramen/ramenChasu.png' 
    }
]