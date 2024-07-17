import { NavLink, Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand fw-bold" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" aria-current="page" data-bs-toggle="dropdown" to="#" aria-expanded="false">Inventory</NavLink>
              <ul className="dropdown-menu">
                <NavLink className="dropdown-item" aria-current="page" to="/manufacturers">Manufacturers</NavLink>
                <NavLink className="dropdown-item" aria-current="page" to="/manufacturers/create">Create a Manufacturer</NavLink>
                <hr className="dropdown-divider"></hr>
                <NavLink className="dropdown-item" aria-current="page" to="/models">Models</NavLink>
                <NavLink className="dropdown-item" aria-current="page" to="/models/create">Create a model</NavLink>
                <hr className="dropdown-divider"></hr>
                <NavLink className="dropdown-item" aria-current="page" to="/automobiles">Automobiles</NavLink>
                <NavLink className="dropdown-item" aria-current="page" to="/automobiles/create">Create an Automobile</NavLink>

              </ul>
            </li>
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" aria-current="page" data-bs-toggle="dropdown" to="#" aria-expanded="false">Sales</NavLink>
              <ul className="dropdown-menu">
                <NavLink className="dropdown-item" aria-current="page" to="/salespeople">Salespeople</NavLink>
                <NavLink className="dropdown-item" aria-current="page" to="/salespeople/create">Add a Salesperson</NavLink>
                <hr className="dropdown-divider"></hr>
                <NavLink className="dropdown-item" aria-current="page" to="/customers">Customers</NavLink>
                <NavLink className="dropdown-item" aria-current="page" to="/customers/create">Add a Customer</NavLink>
                <hr className="dropdown-divider"></hr>
                <NavLink className="dropdown-item" aria-current="page" to="/sales">Sales</NavLink>
                <NavLink className="dropdown-item" aria-current="page" to="/sales/history">Sales History</NavLink>
                <NavLink className="dropdown-item" aria-current="page" to="/sales/create">Add a Sale</NavLink>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" aria-current="page" data-bs-toggle="dropdown" to="#" aria-expanded="false">Services</NavLink>
              <ul className="dropdown-menu">
                <NavLink className="dropdown-item" aria-current="page" to="/technicians">Technicians</NavLink>
                <NavLink className="dropdown-item" aria-current="page" to="/technicians/create">Add a Technician</NavLink>
                <hr className="dropdown-divider"></hr>
                <NavLink className="dropdown-item" aria-current="page" to="/appointments">Service Appointments</NavLink>
                <NavLink className="dropdown-item" aria-current="page" to="/appointments/create">Create a Service Appointment</NavLink>
                <NavLink className="dropdown-item" aria-current="page" to="/appointments/history">Service History</NavLink>
              </ul>
            </li>

          </ul>

        </div>
      </div>
    </nav>
  )
}