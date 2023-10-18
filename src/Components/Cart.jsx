import { useLoaderData } from "react-router-dom";
import Purchased from "./Purchased";
const Cart = () => {
  const products = useLoaderData();
  return (
    <div>
      <h1>This is cart</h1>
      {products.map((product) => (
        <Purchased key={product._id} product={product} />
      ))}
    </div>
  );
};

export default Cart;
