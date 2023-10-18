import { useLoaderData } from "react-router-dom";

const Details = () => {
  const product = useLoaderData();
  //   console.log(product);
  return (
    <div>
      <h1>this is {product.name}</h1>
    </div>
  );
};

export default Details;
