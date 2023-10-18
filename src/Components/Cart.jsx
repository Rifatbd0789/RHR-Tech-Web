import { useLoaderData } from "react-router-dom";
import Purchased from "./Purchased";
import Footer from "./Shared/Footer";
const Cart = () => {
  const products = useLoaderData();
  return (
    <div>
      <div>
        {products.map((product) => (
          <Purchased key={product._id} product={product} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
