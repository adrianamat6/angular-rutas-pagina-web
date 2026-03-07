export interface IProducto {
    id: number;
    title: string;
    price: number;
    quantity: number;
    description: {
        text: string;
        slug: string;
    }, 
    origen: {
        country: string, 
        city: string, 
        cp: string
    }
}
