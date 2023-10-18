/* eslint-disable react/prop-types */
const Purchased = ({ product }) => {
  const { _id, rating } = product;
  const handleDelete = (id) => {
    // console.log(id);
    fetch(`http://localhost:5000/added/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <div className=" m-10 bg-base-200 rounded-lg">
        <div className="hero-content flex-col lg:flex-row  justify-normal">
          <img
            src={product.photo}
            className="max-w-lg w-full rounded-lg shadow-2xl "
          />
          <div className="text-center w-1/2">
            <h1 className="text-5xl font-bold">{product.name}</h1>
            <h1 className="py-2">
              Brand:{" "}
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
                defaultChecked={rating === "1"}
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                defaultChecked={rating === "2"}
                disabled
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-3"
                defaultChecked={rating === "3"}
                disabled
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-4"
                defaultChecked={rating === "4"}
                disabled
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                defaultChecked={rating === "5"}
                disabled
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <p className="py-6">{product.description}</p>
            <button
              onClick={() => handleDelete(_id)}
              className="btn normal-case bg-cyan-500 text-white hover:text-black hover:bg-white"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchased;
