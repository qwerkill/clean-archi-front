import { useEffect, useState } from "react";
import { getOrderService } from "../../domain/use-case/get-order.service";

export const GetOrdersViewModel = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    GetOrders();
  }, []);


  const GetOrders = async () => {
    const response = await getOrderService();
    const orders = await response.json();
    setOrders(orders);
    console.log(response);

    return orders;
  };

  return {
    orders,
  };
};