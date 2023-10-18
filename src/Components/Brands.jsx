import { NavLink } from "react-router-dom";
const Brands = ({ product }) => {
  const { _id, name, brand, photo, rating, type, price } = product;
  // console.log(product);
  return (
    <div>
      {/* Product Card */}
      {
        <div className="card text-white flex-col md:flex-row bg-cyan-500 shadow-xl">
          <figure>
            <img
              className="w-[420px] p-2 rounded-2xl"
              src={photo}
              alt="Movie"
            />
          </figure>
          <div className="card-body py-3">
            <h2 className="card-title">Name: {name}</h2>
            <h2 className="card-title">Brand: {brand}</h2>
            {/* <p>{description}</p> */}
            <p>Type: {type}</p>
            <p>Price: {price}/=</p>
            {/* Rating */}
            {
              <div className="rating rating-md">
                <input
                  type="radio"
                  name="rating"
                  value="1"
                  defaultChecked={rating === "1"}
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating"
                  value="2"
                  defaultChecked={rating === "2"}
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating"
                  value="3"
                  defaultChecked={rating === "3"}
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating"
                  value="4"
                  defaultChecked={rating === "4"}
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating"
                  value="5"
                  defaultChecked={rating === "5"}
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
            }
            <div className="card-actions ">
              <NavLink to={`/card/update/${_id}`}>
                <button className="btn  bg-cyan-500 text-white hover:text-black hover:bg-white">
                  Update
                </button>
              </NavLink>
              <NavLink to={`/card/brand/${_id}`}>
                <button className="btn  bg-cyan-500 text-white hover:text-black hover:bg-white">
                  Details
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default Brands;
