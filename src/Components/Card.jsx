import { useLoaderData } from "react-router-dom";
import Brands from "./Brands";
import Slider from "./Shared/Slider";
import Footer from "./Shared/Footer";

const Card = () => {
  const products = useLoaderData();

  return (
    <div>
      <Slider></Slider>
      <div className="grid grid-cols-1 md:grid-cols-2 my-8 mx-16 md:mx-36 gap-10">
        {products.length !== 0
          ? products.map((product) => (
              <Brands key={product._id} product={product} />
            ))
          : alert("sorry no data found !") || console.log("sorry")}
      </div>
      <Footer />
    </div>
  );
};

export default Card;
