import { useLoaderData } from "react-router-dom";
import Footer from "./Shared/Footer";
import { useState } from "react";
import Swal from "sweetalert2";
const Cart = () => {
  const loadedProducts = useLoaderData();
  const [products, setProducts] = useState(loadedProducts);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/added/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire(
                "Successfully Deleted!",
                "Your product has been deleted from your cart.",
                "success"
              );
            }
          });
        const remaining = products.filter((product) => product._id !== id);
        setProducts(remaining);
      }
    });
  };
  return (
    <div>
      <div>
        {products.map((product) => (
          <div key={product._id}>
            <div className=" m-10 bg-base-200 rounded-lg">
              <div className="hero-content flex-col lg:flex-row  justify-normal">
                <img
                  src={product.photo}
                  className="max-w-lg w-full rounded-lg shadow-2xl "
                />
                <div className="text-center w-1/2">
                  <h1 className="text-5xl font-bold">{product.name}</h1>
                  <h1 className="py-2">
                    Brand:
                    <span className="text-xl font-bold capitalize">
                      {product.brand}
                    </span>
                  </h1>
                  <p className="pb-6">Price: {product.price}$</p>
                  {/* Rating */}
                  <div className="rating rating-md">
                    <input
                      type="radio"
                      name="rating-1"
                      disabled
                      defaultChecked={product.rating === "1"}
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      defaultChecked={product.rating === "2"}
                      disabled
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-3"
                      defaultChecked={product.rating === "3"}
                      disabled
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-4"
                      defaultChecked={product.rating === "4"}
                      disabled
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      defaultChecked={product.rating === "5"}
                      disabled
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                  <p className="py-6">{product.description}</p>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="btn normal-case bg-cyan-500 text-white hover:text-black hover:bg-white"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
