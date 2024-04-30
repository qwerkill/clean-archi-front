import { createOrderService } from "../../domain/use-case/create-order.service";
import { useState } from "react";

export const useCreateOrderViewModel = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleCreateOrder = async (event:any) => {
    event.preventDefault();

    const product = event.target.product.value;
    const quantity = event.target.quantity.value;
    const price = event.target.price.value;

    try {
      await createOrderService({
        customerName: "David Robert",
        orderItems: [
          {
            productName: product,
            quantity: quantity,
            price: price,
          },
        ],
      });

      setErrorMessage(null);
      setSuccessMessage("Order created successfully.");
    } catch (error) {
      setSuccessMessage(null);
      setErrorMessage(error.message);
    }
  };

  return {
    handleCreateOrder,
    errorMessage,
    successMessage,
  };
};
