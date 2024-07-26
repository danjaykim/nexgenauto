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

  // console.log(carModels);


  return (
    <>
      {/* Hero */}
      <div className="hero-container p-5 my-4">
        <div className="hero-text">
          <h1 className="hero-title display-5 fw-bold border-bottom opacity-75">CarCar</h1>
          <p className="lead col-md-8 fs-4 opacity-75 pt-4">The premiere solution for automobile dealership management</p>
        </div>
        <Link className="hero-btn" to="/models">Models</Link>
      </div>

      {/* Second Section */}
      <div className="main-containers why-container my-5 d-flex flex-column">
        <p className="arsenal h4 w-20 mb-3">Your Dealership Management Arsenal</p>
        <div className="why-container-div d-flex w-60 m-auto">

          {/* Inventory - Off Canvas */}
          <div className="icon-container text-center" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithInventory" aria-controls="offcanvasWithInventory">
            <i className="circle-icon fa-duotone fa-solid fa-car fa-2x"></i>
            <p className="pt-4">INVENTORY</p>
            <p>Your dealership's automobile data secure and at your fingertips</p>
          </div>
          <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithInventory" aria-labelledby="offcanvasWithInventory">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasWithInventory">Inventory</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <p>At CarCar we pride ourselves in taking care of our partner's inventory data like it's our own!</p>
              <p>There are three sub-categories (Manufacturers, Models, and Automobiles) in our Inventory section</p>
              <img src="/images/row-of-cars.avif" className="offcanvas-img" alt="Row of cars" />
              <hr />
              <p>MANUFACTURERS</p>
              <ul>
                <li><Link className="li-link" to="/manufacturers">List of all Manufacturers</Link></li>
                <li><Link className="li-link" to="/manufacturers/create">Create a new Manufacturer</Link></li>
              </ul>
              <hr />
              <p>MODELS</p>
              <ul>
                <li><Link className="li-link" to="/models">List of all Models</Link></li>
                <li><Link className="li-link" to="/models/create">Create a new Model</Link></li>
              </ul>
              <hr />
              <p>AUTOMOBILES</p>
              <ul>
                <li><Link className="li-link" to="/automobiles">List of all Automobiles</Link></li>
                <li><Link className="li-link" to="/automobiles/create">Create a new Automobile</Link></li>
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
              <p>At CarCar we pride ourselves in taking care of our partners Sales data like it's our own!</p>
              <p>There are three sub-categories (Salespeople, Customers, and Sales) in our Inventory section</p>
              <img src="/images/pexels-gustavo-fring-2.jpg" className="offcanvas-img" alt="Car salesman talking with customer" />
              <hr />
              <p>SALESPEOPLE (STAFF)</p>
              <ul>
                <li><Link className="li-link" to="/salespeople">List of all Salespeople</Link></li>
                <li><Link className="li-link" to="/salespeople/create">Create a new Salesperson</Link></li>
              </ul>
              <hr />
              <p>CUSTOMERS</p>
              <ul>
                <li><Link className="li-link" to="/customers">List of all Customers</Link></li>
                <li><Link className="li-link" to="/customers/create">Create a new Customer</Link></li>
              </ul>
              <hr />
              <p>SALES</p>
              <ul>
                <li><Link className="li-link" to="/sales">List of all Sales</Link></li>
                <li><Link className="li-link" to="/sales/history">Sales History by Employee</Link></li>
                <li><Link className="li-link" to="/sales/create">Create a new Sale</Link></li>
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
              <p>At CarCar we pride ourselves in taking care of our partners Servicing data like it's our own!</p>
              <p>There are three sub-categories (Technicians, Service Appointments, and Service History) in our Services section</p>
              <img src="/images/auto-tech.jpg" className="offcanvas-img" alt="Car technician" />
              <hr />
              <p>TECHNICIANS (STAFF)</p>
              <ul>
                <li><Link className="li-link" to="/technicians">List of all Technicians</Link></li>
                <li><Link className="li-link" to="/technicians/create">Create a new Technician</Link></li>
              </ul>
              <hr />
              <p>SERVICE APPOINTMENTS</p>
              <ul>
                <li><Link className="li-link" to="/appointments">List of all Appointments</Link></li>
                <li><Link className="li-link" to="/appointments/create">Create a new Appointment</Link></li>
              </ul>
              <hr />
              <p>SERVICE HISTORY</p>
              <ul>
                <li><Link className="li-link" to="/appointments/history">Service History by VIN</Link></li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* Third Section - Featured Models Carousel */}
      <div id="carouselExampleAutoplaying" className="carousel slide caro" data-bs-ride="carousel" data-bs-interval="3000">
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
          <h4> - Our Message to You -</h4>
          <p>
            CarCar is dedicated to providing the top-of-the-line Dealership Management Software to you. From inventory, sales, and servicing,
            CarCar provides intensive data management to streamline your business. Our comprehensive surplus of tools covers every single aspect
            of dealership operations - from inventory management and service scheduling to sales tracking and lorem ipsum.
          </p>
          <p>
            CarCar's easy to use interface ensures that you and your team can quickly adapt and maximize productivity. Our advanced
            data management system only optimizes workflow and business performance! Our software features real-time updates and seamless integration
            with all other systems. Another lorem ipsum to take up some space!
          </p>
          <p>
            Thank you for choosing and trusting in CarCar as your Dealership Management Software partner. We are truly appreciative and
            will always be commited to helping your business achieve its goals. Cheers!
          </p>
        </div>
      </div>

    </>
  );
}