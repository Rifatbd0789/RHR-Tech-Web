import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
// import { Link } from "react-router-dom";
const Details = () => {
  const product = useLoaderData();
  const { name, photo, brand, price, description, rating, type } = product;
  const newProduct = { name, photo, brand, price, description, rating, type };
  const handleCart = (newProduct) => {
    fetch("http://localhost:5000/added", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Thank you!",
            text: `${name} added to Cart`,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Sorry!",
            text: `you have already added ${name} to Cart`,
            footer: '<a href="/">please choose another one !</a>',
          });
        }
      });
  };
  return (
    <div>
      <div className="mx-20 mt-8">
        <img className="  h-80 w-2/4 mx-auto" src={photo} alt="" />
      </div>
      <div className=" text-center">
        <div>
          <h1 className="text-3xl font-bold">{name}</h1>
          <h2 className="text-2xl font-semibold">{brand}</h2>
          <p className="p-2">Only {price}/=</p>
          <p>{description}</p>
          <div>
            <button
              onClick={() => handleCart(newProduct)}
              className="btn  bg-cyan-500 text-white hover:text-black hover:bg-white"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
