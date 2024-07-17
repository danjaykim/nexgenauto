import { NavLink, Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary text-white">
      <div className="container-fluid">
        <NavLink className="navbar-brand fw-bold" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle fw-medium" aria-current="page" data-bs-toggle="dropdown" to="#" aria-expanded="false">Inventory</NavLink>
              <ul className="dropdown-menu bg-primary text-white">
                <Link className="dropdown-item" aria-current="page" to="/manufacturers">Manufacturers</Link>
                <Link className="dropdown-item" aria-current="page" to="/manufacturers/create">Create a Manufacturer</Link>
                <hr className="dropdown-divider"></hr>
                <Link className="dropdown-item" aria-current="page" to="/models">Models</Link>
                <Link className="dropdown-item" aria-current="page" to="/models/create">Create a model</Link>
                <hr className="dropdown-divider"></hr>
                <Link className="dropdown-item" aria-current="page" to="/automobiles">Automobiles</Link>
                <Link className="dropdown-item" aria-current="page" to="/automobiles/create">Create an Automobile</Link>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle fw-medium" aria-current="page" data-bs-toggle="dropdown" to="#" aria-expanded="false">Sales</NavLink>
              <ul className="dropdown-menu bg-primary text-white">
                <Link className="dropdown-item" aria-current="page" to="/salespeople">Salespeople</Link>
                <Link className="dropdown-item" aria-current="page" to="/salespeople/create">Add a Salesperson</Link>
                <hr className="dropdown-divider"></hr>
                <Link className="dropdown-item" aria-current="page" to="/customers">Customers</Link>
                <Link className="dropdown-item" aria-current="page" to="/customers/create">Add a Customer</Link>
                <hr className="dropdown-divider"></hr>
                <Link className="dropdown-item" aria-current="page" to="/sales">Sales</Link>
                <Link className="dropdown-item" aria-current="page" to="/sales/history">Sales History</Link>
                <Link className="dropdown-item" aria-current="page" to="/sales/create">Add a Sale</Link>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle fw-medium" aria-current="page" data-bs-toggle="dropdown" to="#" aria-expanded="false">Services</NavLink>
              <ul className="dropdown-menu bg-primary text-white">
                <Link className="dropdown-item" aria-current="page" to="/technicians">Technicians</Link>
                <Link className="dropdown-item" aria-current="page" to="/technicians/create">Add a Technician</Link>
                <hr className="dropdown-divider"></hr>
                <Link className="dropdown-item" aria-current="page" to="/appointments">Service Appointments</Link>
                <Link className="dropdown-item" aria-current="page" to="/appointments/create">Create a Service Appointment</Link>
                <Link className="dropdown-item" aria-current="page" to="/appointments/history">Service History</Link>
              </ul>
            </li>

          </ul>

        </div>
      </div>
    </nav>
  )
}
