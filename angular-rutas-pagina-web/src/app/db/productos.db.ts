import { IProducto } from "../interfaces/iproducto"

export const PRODUCTOS: IProducto[] = [
    {
        id: 1,
        title: "Teclado Mecánico RGB",
        price: 85.50,
        quantity: 12,
        description: {
            text: "Teclado con interruptores red switch, ideal para gaming y oficina con retroiluminación personalizable.",
            slug: "teclado-mecanico-rgb-pro"
        },
        origen: {
            country: "España",
            city: "Alicante",
            cp: '03600'
        }
    },
    {
        id: 2,
        title: "Cafetera de Goteo",
        price: 42.99,
        quantity: 5,
        description: {
            text: "Cafetera automática con jarra de cristal de 1.5 litros y sistema de mantenimiento de calor.",
            slug: "cafetera-goteo-classic"
        },
        origen: {
            country: "Italia",
            city: "Roma",
            cp: '00118',
        }
    },
    {
        id: 3,
        title: "Monitor 4K UltraWide",
        price: 320.00,
        quantity: 3,
        description: {
            text: "Pantalla de 34 pulgadas con resolución 4K y panel IPS para una fidelidad de color excepcional.",
            slug: "monitor-4k-ultrawide-office"
        },
        origen: {
            country: "Corea del Sur",
            city: "Seúl",
            cp: '06000'
        }
    }
];