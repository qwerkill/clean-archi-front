import { OrderRepository } from "../../infrastructure/repository/order.repository";

export const getOrderService = async () => {
    const {fetchGetOrder} = OrderRepository();

    try {
        return await fetchGetOrder();
    } catch (error) {
        throw new Error("Failed to get order");
    }
}