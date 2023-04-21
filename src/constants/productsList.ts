import { Product } from '@/interfaces/Product.interface';
import { productCategories } from './productCategories';
import { productManufacturers } from './productManufacturers';

export const productsList: Product[] = [
    {
        id: '00001',
        name: 'Empire Axe 2.0',
        price: 514.99,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        category: productCategories.markers.electronic,
        manufacturer: productManufacturers.empire,
        colors: [
            {
                color: 'Dust Black/Dust Black',
                imageUrl: '/images/markers/axe-black.jpg',
                defaultColor: true,
            },
            {
                color: 'Dust Red/Dust Silver',
                imageUrl: '/images/markers/axe-red.jpg',
                defaultColor: false,
            },
            {
                color: 'Dust Blue/Dust Black',
                imageUrl: '/images/markers/axe-blue.jpg',
                defaultColor: false,
            },
        ]
    },
    {
        id: '00002',
        name: 'Planet Eclipse Etha 3 Electronic',
        price: 549.95,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        category: productCategories.markers.electronic,
        manufacturer: productManufacturers.planetEclipse,
        colors: [
            {
                color: 'Black',
                imageUrl: '/images/markers/etha3e.jpg',
                defaultColor: true,
            },
        ]
    },
    {
        id: '00003',
        name: 'Planet Eclipse Etha 3 Mechanical',
        price: 399.95,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        category: productCategories.markers.mechanical,
        manufacturer: productManufacturers.planetEclipse,
        colors: [
            {
                color: 'Black',
                imageUrl: '/images/markers/etha3m.jpg',
                defaultColor: true,
            },
        ]
    },
    {
        id: '00004',
        name: 'Tippmann 98 Custom',
        price: 149.99,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        category: productCategories.markers.mechanical,
        manufacturer: productManufacturers.tippmann,
        colors: [
            {
                color: 'Black',
                imageUrl: '/images/markers/98custom.jpg',
                defaultColor: true,
            },
        ]
    },
    {
        id: '00005',
        name: 'Dye DSR+',
        price: 999.95,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        category: productCategories.markers.electronic,
        manufacturer: productManufacturers.dye,
        colors: [
            {
                color: 'Dust Black/Black',
                imageUrl: '/images/markers/dsr-black.jpg',
                defaultColor: true,
            },
            {
                color: 'Deep Blue (Blue/Black)',
                imageUrl: '/images/markers/dsr-blue.jpg',
                defaultColor: false,
            },
            {
                color: 'Lava (Red/Silver)',
                imageUrl: '/images/markers/dsr-red.jpg',
                defaultColor: false,
            },
        ]
    },
    {
        id: '00006',
        name: 'Dye Rotor R2',
        price: 199.95,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        category: productCategories.hoppers.electronic,
        manufacturer: productManufacturers.dye,
        colors: [
            {
                color: 'Black/Black',
                imageUrl: '/images/hoppers/r2-black.jpg',
                defaultColor: true,
            },
            {
                color: 'Black/Blue Ice',
                imageUrl: '/images/hoppers/r2-blue.jpg',
                defaultColor: false,
            },
            {
                color: 'Black/Fire',
                imageUrl: '/images/hoppers/r2-red.jpg',
                defaultColor: false,
            },
        ]
    },
    {
        id: '00007',
        name: 'Empire Halo Too',
        price: 84.95,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        category: productCategories.hoppers.electronic,
        manufacturer: productManufacturers.empire,
        colors: [
            {
                color: 'Matte Black',
                imageUrl: '/images/hoppers/empire-black.jpg',
                defaultColor: true,
            },
            {
                color: 'Pearl Blue',
                imageUrl: '/images/hoppers/empire-blue.jpg',
                defaultColor: false,
            },
            {
                color: 'Pearl Red',
                imageUrl: '/images/hoppers/empire-red.jpg',
                defaultColor: false,
            },
        ]
    },
    {
        id: '00008',
        name: 'HK Army TFX 3',
        price: 179.95,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        category: productCategories.hoppers.electronic,
        manufacturer: productManufacturers.hkArmy,
        colors: [
            {
                color: 'Black/Black',
                imageUrl: '/images/hoppers/hk-black.jpg',
                defaultColor: true,
            },
            {
                color: 'Black/Blue',
                imageUrl: '/images/hoppers/hk-blue.jpg',
                defaultColor: false,
            },
            {
                color: 'Black/Red',
                imageUrl: '/images/hoppers/hk-red.jpg',
                defaultColor: false,
            },
        ]
    },
    {
        id: '00009',
        name: 'HK Army CO2 Tank 20oz',
        price: 27.95,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        category: productCategories.tanks.carbonDioxide,
        manufacturer: productManufacturers.hkArmy,
        colors: [
            {
                color: 'Black',
                imageUrl: '/images/tanks/hk-co2-black.jpg',
                defaultColor: true,
            },
            {
                color: 'Blue',
                imageUrl: '/images/tanks/hk-co2-blue.jpg',
                defaultColor: false,
            },
            {
                color: 'Red',
                imageUrl: '/images/tanks/hk-co2-red.webp',
                defaultColor: false,
            },
        ]
    },
    {
        id: '00010',
        name: 'HK Army 68/4500 HSTL HPA Tank',
        price: 169.95,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        category: productCategories.tanks.hpa,
        manufacturer: productManufacturers.hkArmy,
        colors: [
            {
                color: 'Black',
                imageUrl: '/images/tanks/hk-hpa-black.jpg',
                defaultColor: true,
            },
            {
                color: 'Blue',
                imageUrl: '/images/tanks/hk-hpa-blue.jpg',
                defaultColor: false,
            },
            {
                color: 'Red',
                imageUrl: '/images/tanks/hk-hpa-red.jpg',
                defaultColor: false,
            },
        ]
    },
    {
        id: '00011',
        name: 'Dye i5 2.0',
        price: 199.95,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        category: productCategories.masks,
        manufacturer: productManufacturers.dye,
        colors: [
            {
                color: 'Onyx',
                imageUrl: '/images/masks/i5-black.jpg',
                defaultColor: true,
            },
            {
                color: 'Storm',
                imageUrl: '/images/masks/i5-blue.jpg',
                defaultColor: false,
            },
            {
                color: 'Fire',
                imageUrl: '/images/masks/i5-red.jpg',
                defaultColor: false,
            },
        ]
    },
    {
        id: '00012',
        name: 'Empire EVS',
        price: 179.95,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        category: productCategories.masks,
        manufacturer: productManufacturers.empire,
        colors: [
            {
                color: 'Black/Black',
                imageUrl: '/images/masks/evs-black.jpg',
                defaultColor: true,
            },
            {
                color: 'Black/Blue',
                imageUrl: '/images/masks/evs-blue.jpg',
                defaultColor: false,
            },
            {
                color: 'Black/Red',
                imageUrl: '/images/masks/evs-red.jpg',
                defaultColor: false,
            },
        ]
    },
    {
        id: '00013',
        name: 'HK Army SLR',
        price: 129.95,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        category: productCategories.masks,
        manufacturer: productManufacturers.hkArmy,
        colors: [
            {
                color: 'Black/Smoke Lens',
                imageUrl: '/images/masks/slr-black.jpg',
                defaultColor: true,
            },
            {
                color: 'Black/Arctic Lens',
                imageUrl: '/images/masks/slr-blue.jpg',
                defaultColor: false,
            },
            {
                color: 'Black/Scorch Lens',
                imageUrl: '/images/masks/slr-red.jpg',
                defaultColor: false,
            },
        ]
    },
]