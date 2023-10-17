import { Link } from "react-router-dom";

const Navbar = () => {
  const Links = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/add">Add Product</Link>
      </li>
      <li>
        <Link to="/cart">My Cart</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-lime-300">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {Links}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            <div className="avatar w-12">
              <img
                className="rounded-xl"
                src="https://i.ibb.co/ThyfSfz/a-logo-using-rhr-tech-as-company-name-upscaled.png"
                alt=""
              />
            </div>
            <p>RHR-Tech</p>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{Links}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Log In</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
