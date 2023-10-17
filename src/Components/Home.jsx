// import Card from "./Card";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      {/* Banner */}
      <div className="carousel carousel-center ">
        <div className="carousel-item w-full h-[270px] md:h-[480px]">
          <img
            src="https://i.ibb.co/M1pHBt5/33139536-7995902.jpg"
            alt="Pizza"
          />
        </div>
      </div>
      {/* product card */}
      <div>
        {/* <Card />; */}
        <div className="grid grid-cols-3 gap-8 m-10">
          <Link to={"/card/google"}>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://i.ibb.co/T8k6Vhv/google.jpg"
                  alt="Google Logo"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Google</h2>
              </div>
            </div>
          </Link>
          <Link to={"/card/apple"}>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://i.ibb.co/T8k6Vhv/google.jpg"
                  alt="Google Logo"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Apple</h2>
              </div>
            </div>
          </Link>
          <Link to={"/card/sony"}>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://i.ibb.co/T8k6Vhv/google.jpg"
                  alt="Google Logo"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Google</h2>
              </div>
            </div>
          </Link>
          <Link to={"/card/google"}>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://i.ibb.co/T8k6Vhv/google.jpg"
                  alt="Google Logo"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Google</h2>
              </div>
            </div>
          </Link>
          <Link to={"/card/google"}>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://i.ibb.co/T8k6Vhv/google.jpg"
                  alt="Google Logo"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Google</h2>
              </div>
            </div>
          </Link>
          <Link to={"/card/google"}>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://i.ibb.co/T8k6Vhv/google.jpg"
                  alt="Google Logo"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Google</h2>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
