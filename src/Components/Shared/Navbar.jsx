import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { context } from "../ContextProvider/Provider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOutUser } = useContext(context);
  const Links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? " border border-offset-4 " : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/add"
          className={({ isActive }) =>
            isActive ? " border border-offset-4 decoration-white " : ""
          }
        >
          Add Product
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive ? " border border-offset-4 decoration-white " : ""
          }
        >
          My Cart
        </NavLink>
      </li>
    </>
  );
  const handleLogOut = () => {
    logOutUser()
      .then(() => Swal.fire("Logout Successfully!"))
      .catch((err) => Swal.fire(err.code));
  };
  return (
    <div>
      <div className="navbar bg-cyan-500 text-white">
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
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <div className="avatar w-12">
              <img
                className="rounded-xl"
                src="https://i.ibb.co/ThyfSfz/a-logo-using-rhr-tech-as-company-name-upscaled.png"
                alt=""
              />
            </div>
            <p>RHR-Tech</p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{Links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <p className="text-xs md:text-xl">{user?.displayName}</p>
              <img
                className="w-12 rounded-full mr-3"
                src={user?.photoURL}
                alt=""
              />
              <NavLink
                onClick={handleLogOut}
                className="btn btn-xs md:btn-md normal-case bg-cyan-500 text-white hover:text-black"
              >
                Log Out
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                to={"/login"}
                className="btn normal-case bg-cyan-500 text-white hover:text-black"
              >
                Login
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
