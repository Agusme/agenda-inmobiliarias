import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar shadow-sm bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round"
                strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><NavLink to="/" className={({ isActive }) =>
              isActive ? "font-bold text-primary !bg-gray-50" : " font-semibold hover:text-primary hover:!bg-gray-100"
            }>Inicio</NavLink></li>
            <li><NavLink to="/clientes" className={({ isActive }) =>
              isActive ? "font-bold text-primary !bg-gray-50" : " font-semibold hover:text-primary hover:!bg-gray-100"
            }>Clientes</NavLink></li>
            <li><NavLink to="/propiedades" className={({ isActive }) =>
              isActive ? "font-bold text-primary !bg-gray-50" : " font-semibold hover:text-primary hover:!bg-gray-100"
            }>Propiedades</NavLink></li>
            <li><NavLink to="/propiedades-terceros" className={({ isActive }) =>
              isActive ? "font-bold text-primary !bg-gray-50" : " font-semibold hover:text-primary hover:!bg-gray-100"
            }>Propiedades Terceros</NavLink></li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-2xl font-bold text-primary hover:!bg-gray-100 hover:border-none">
          Agenda<span className=" text-blue-950">Inmo</span>
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><NavLink to="/" className={({ isActive }) =>
            isActive ? "font-bold text-primary !bg-gray-50" : " font-semibold hover:text-primary hover:!bg-gray-100"
          }>Inicio</NavLink></li>
          <li><NavLink to="/clientes" className={({ isActive }) =>
            isActive ? "font-bold text-primary !bg-gray-50" : " font-semibold hover:text-primary hover:!bg-gray-100"
          }>Clientes</NavLink></li>
          <li><NavLink to="/propiedades" className={({ isActive }) =>
            isActive ? "font-bold text-primary !bg-gray-50" : " font-semibold hover:text-primary hover:!bg-gray-100"
          }>Propiedades</NavLink></li>
          <li><NavLink to="/propiedades-terceros" className={({ isActive }) =>
            isActive ? "font-bold text-primary !bg-gray-50" : " font-semibold hover:text-primary hover:!bg-gray-100"
          }>Propiedades Terceros</NavLink></li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>

    </div>
  )
}
