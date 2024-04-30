import { OrderRepository } from "../../infrastructure/repository/order.repository";
import { CreateOrderDto } from "../dto/create-order.dto";

export const createOrderService = async (createOrderDto: CreateOrderDto) => {
  createOrderDto.orderItems.forEach((orderItem) => {
    if (orderItem.price < 10) {
      throw new Error("Price must be greater than 10");
    }
  });

  const { fetchCreateOrder } = OrderRepository();

  try {
    await fetchCreateOrder(createOrderDto);
  } catch (error) {
    throw new Error("Failed to create order");
  }
};
