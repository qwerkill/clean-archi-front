import { useCreateOrderViewModel } from "./CreateOrderViewModel";

const CreateOrder = () => {
  const { handleCreateOrder, errorMessage, successMessage } = useCreateOrderViewModel();

  return (
    <main>
      {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
      {successMessage && <div style={{ color: "green" }}>{successMessage}</div>}

      <h1> Create order</h1>
      <form onSubmit={handleCreateOrder}>
        <label htmlFor="product">Product</label>
        <input type="text" id="product" name="product" required />

        <label htmlFor="quantity">Quantity</label>
        <input type="number" id="quantity" name="quantity" required />

        <label htmlFor="price">Price</label>
        <input type="number" id="price" name="price" required />

        <input type="submit" value="Créer une commande" />
      </form>
    </main>
  );
};

export default CreateOrder;
