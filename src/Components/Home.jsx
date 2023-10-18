import { Link } from "react-router-dom";
import Footer from "./Shared/Footer";
const Home = () => {
  return (
    <div className="bg-base-200">
      {/* Banner */}
      <div className="carousel carousel-center ">
        <div className="carousel-item w-full h-[270px] md:h-[480px]">
          <img
            src="https://i.ibb.co/qYPz4TN/33139536-7995902.jpg"
            alt="Banner"
          />
        </div>
      </div>
      <hr className="p-2 bg-base-300" />
      {/* product card */}
      <div>
        <h1 className="text-center my-5  text-5xl font-bold">Brands</h1>
        {/* <Card />; */}
        <div className="grid grid-cols-3 gap-8 m-10">
          <Link to={"/card/google"}>
            <div className="card h-72 bg-base-100 shadow-xl ">
              <figure>
                <img
                  className="w-full"
                  src="https://i.ibb.co/T8k6Vhv/google.jpg"
                  alt="Google Logo"
                />
              </figure>
              <div className="card-body mx-auto">
                <h2 className="card-title ">Google</h2>
              </div>
            </div>
          </Link>
          <Link to={"/card/apple"}>
            <div className="card h-72 bg-base-100 shadow-xl">
              <figure>
                <img
                  className="w-full"
                  src="https://i.ibb.co/dWQMLdy/apple.png"
                  alt="Google Logo"
                />
              </figure>
              <div className="card-body mx-auto">
                <h2 className="card-title">Apple</h2>
              </div>
            </div>
          </Link>
          <Link to={"/card/sony"}>
            <div className="card h-72 bg-base-100 shadow-xl">
              <figure>
                <img
                  className="w-full"
                  src="https://i.ibb.co/pLLd6fF/sony.png"
                  alt="Google Logo"
                />
              </figure>
              <div className="card-body mx-auto">
                <h2 className="card-title">Sony</h2>
              </div>
            </div>
          </Link>
          <Link to={"/card/samsung"}>
            <div className="card h-72 bg-base-100 shadow-xl">
              <figure>
                <img
                  className="w-full"
                  src="https://i.ibb.co/0Vj8j9b/samsung.jpg"
                  alt="Google Logo"
                />
              </figure>
              <div className="card-body mx-auto">
                <h2 className="card-title">Samsung</h2>
              </div>
            </div>
          </Link>
          <Link to={"/card/intel"}>
            <div className="card h-72 bg-base-100 shadow-xl">
              <figure>
                <img
                  className="w-full"
                  src="https://i.ibb.co/BzVq7Kk/Intel.png"
                  alt="Google Logo"
                />
              </figure>
              <div className="card-body mx-auto">
                <h2 className="card-title">Intel</h2>
              </div>
            </div>
          </Link>
          <Link to={"/card/xiaomi"}>
            <div className="card h-72 bg-base-100 shadow-xl">
              <figure>
                <img
                  className="w-full"
                  src="https://i.ibb.co/GP6jDN2/mi.jpg"
                  alt="Google Logo"
                />
              </figure>
              <div className="card-body mx-auto">
                <h2 className="card-title">Xiaomi</h2>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <hr className="p-2 bg-base-300" />
      {/* footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
