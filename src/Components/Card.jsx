import { useLoaderData } from "react-router-dom";
import Details from "./Details";

const Card = () => {
  const products = useLoaderData();
  //   const google = "google";
  console.log(products);

  return (
    <div>
      {products.length !== 0
        ? products.map((product) => (
            <Details key={product._id} product={product} />
          ))
        : alert("sorry no data found !") || console.log("sorry")}
    </div>
  );
};

export default Card;
