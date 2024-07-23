import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


export default function MainPage() {
  const [carModels, getCarModels] = useState([]);

  const fetchCarModels = async () => {
    const response = await fetch('http://localhost:8100/api/models/');
    if (response.ok) {
      const carModelData = await response.json();
      // console.log(carModelData);
      getCarModels(carModelData.models)
    }
  }

  useEffect(() => {
    fetchCarModels();
  }, [])

  console.log(carModels);


  return (
    <>
      {/* Hero */}
      <div className="hero-container p-5 my-4">
        <div className="hero-text">
          <h1 className="hero-title display-5 fw-bold border-bottom opacity-75">CarCar</h1>
          <p className="lead col-md-8 fs-4 opacity-75 pt-2">The premiere solution for automobile dealership management</p>
        </div>
        <Link className="hero-btn" to="/models">Models</Link>
      </div>

      {/* Second Section */}
      <div className="main-containers why-container my-5 d-flex flex-column">
        <p className="arsenal h4 w-20 mb-3">YOUR ARSENAL</p>
        <div className="why-container-div d-flex w-60 m-auto">

          {/* Inventory - Off Canvas */}
          <div className="icon-container text-center" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithInventory" aria-controls="offcanvasWithInventory">
            <i className="circle-icon fa-duotone fa-solid fa-car fa-2x"></i>
            <p className="pt-4">INVENTORY</p>
            <p>Safely store your vehicle data with CarCar and know that you're in good hands</p>
          </div>
          <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithInventory" aria-labelledby="offcanvasWithInventory">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasWithInventory">Inventory</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <p>Write a semi-detailed explanation of the Inventory Category</p>
              <p>possibly an img here</p>
              <hr />
              <p>MANUFACTURERS</p>
              <ul>
                <li><Link to="/manufacturers">List of all Manufacturers</Link></li>
                <li><Link to="/manufacturers/create">Create a new Manufacturer</Link></li>
              </ul>
              <hr />
              <p>MODELS</p>
              <ul>
                <li><Link to="/models">List of all Models</Link></li>
                <li><Link to="/models/create">Create a new Model</Link></li>
              </ul>
              <hr />
              <p>AUTOMOBILES</p>
              <ul>
                <li><Link to="/automobiles">List of all Automobiles</Link></li>
                <li><Link to="/automobiles/create">Create a new Automobile</Link></li>
              </ul>
            </div>
          </div>

          {/* Sales - Off Canvas */}
          <div className="icon-container text-center" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithSales" aria-controls="offcanvasWithSales">
            <i className="circle-icon fa-solid fa-user-tie fa-2x"></i>
            <p className="pt-4">SALES</p>
            <p>The heart of the organization responsible for selling your vehicles</p>
          </div>
          <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithSales" aria-labelledby="offcanvasWithSales">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasWithSales">Sales</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <p>Write a semi-detailed explanation of the Sales Category</p>
              <p>possibly an img here</p>
              <hr />
              <p>SALESPEOPLE (STAFF)</p>
              <ul>
                <li><Link to="/salespeople">List of all Salespeople</Link></li>
                <li><Link to="/salespeople/create">Create a new Salesperson</Link></li>
              </ul>
              <hr />
              <p>CUSTOMERS</p>
              <ul>
                <li><Link to="/customers">List of all Customers</Link></li>
                <li><Link to="/customers/create">Create a new Customer</Link></li>
              </ul>
              <hr />
              <p>SALES</p>
              <ul>
                <li><Link to="/sales">List of all Sales</Link></li>
                <li><Link to="/sales/history">Sales History by Employee</Link></li>
                <li><Link to="/sales/create">Create a new Sale</Link></li>
              </ul>
            </div>
          </div>

          {/* Services - Off Canvas */}
          <div className="icon-container text-center" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithServices" aria-controls="offcanvasWithServices">
            <i className="circle-icon fa-solid fa-car-burst fa-2x"></i>
            <p className="pt-4">SERVICES</p>
            <p>The muscle ensuring your customers vehicles are in top shape</p>
          </div>
          <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithServices" aria-labelledby="offcanvasWithServices">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasWithServices">Services</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <p>Write a semi-detailed explanation of the Service Category</p>
              <p>possibly an img here</p>
              <hr />
              <p>TECHNICIANS (STAFF)</p>
              <ul>
                <li><Link to="/technicians">List of all Technicians</Link></li>
                <li><Link to="/technicians/create">Create a new Technician</Link></li>
              </ul>
              <hr />
              <p>SERVICE APPOINTMENTS</p>
              <ul>
                <li><Link to="/appointments">List of all Appointments</Link></li>
                <li><Link to="/appointments/create">Create a new Appointment</Link></li>
              </ul>
              <hr />
              <p>SERVICE HISTORY</p>
              <ul>
                <li><Link to="/appointments/history">Service History by VIN</Link></li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* Third Section - Featured Models */}
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {carModels.map((carModel, index) => {
            return (
              <div key={carModel.id} className={`carousel-item ${index === 0 ? 'active' : ''}`} >
                <img src={carModel.picture_url} className="d-block w-100" alt="Model Image" />
              </div>
            );
          })}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div >

      {/* Fourth Section - Mission */}
      <div className="main-containers fourth-section">
        <div className="mission-container">
          <img src="images/car-white-background.avif" className="mission-car" alt="White super car" />
          <h4>Our Mission</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae adipisci harum corporis fugiat,
            non iusto suscipit doloremque similique reprehenderit libero sed quidem facere blanditiis architecto
            aperiam debitis vero perferendis quae!</p>
        </div>
      </div>

    </>
  );
}