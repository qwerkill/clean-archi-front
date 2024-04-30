import { GetOrderDto } from "../../domain/dto/get-order.dto";
import { GetOrdersViewModel } from "./GetOrdersViewModel";


const GetOrders = () => {
  const { orders } = GetOrdersViewModel();

  return (
    <div>
      {orders.map((order: GetOrderDto) => (
        <div key={order.id}>
          <h1>{order.id}</h1>
          <p>{order.customerName}</p>
          <p>{order.price}</p>
        </div>
      ))}
    </div>
  );
};

export default GetOrders;