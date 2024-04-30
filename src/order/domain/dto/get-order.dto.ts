export type GetOrderDto = {
    id: string;
    customerName: string;
    price : number;
    orderItems: {
        productName: string;
        quantity: number;
        price: number;
    }[];
    };