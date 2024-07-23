import { Link } from "react-router-dom";



export default function MainPage() {
  return (
    <>
      <div className="hero-container p-5 my-4">
        <div className="hero-text">
          <h1 className="hero-title display-5 fw-bold border-bottom opacity-75">CarCar</h1>
          <p className="lead col-md-8 fs-4 opacity-75 pt-2">The premiere solution for automobile dealership management</p>
        </div>
        <Link className="hero-btn" to="/models">button</Link>
      </div>

      <div className="main-containers why-container my-5 d-flex flex-column">
        <p className="arsenal h4 w-20 mb-3">YOUR ARSENAL</p>
        <div className="why-container-div d-flex w-60 m-auto">

          <div className="icon-container text-center" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithInventory" aria-controls="offcanvasWithInventory">
            <i className="circle-icon fa-duotone fa-solid fa-car fa-3x"></i>
            <p className="pt-4">INVENTORY</p>
            <p>Safely store all your vehicle data with CarCar and know that you're in good hands</p>
          </div>
          <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithInventory" aria-labelledby="offcanvasWithInventory">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasWithInventory">Inventory</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <p>Test 123</p>
            </div>
          </div>

          <div className="icon-container text-center" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithSales" aria-controls="offcanvasWithSales">
            <i className="circle-icon fa-solid fa-user-tie fa-3x"></i>
            <p className="pt-4">SALES</p>
            <p>The heart of the organization responsible for selling your vehicles</p>
          </div>
          <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithSales" aria-labelledby="offcanvasWithSales">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasWithSales">Sales</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <p>Try scrolling the rest of the page to see this option in action.</p>
            </div>
          </div>

          <div className="icon-container text-center" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithServices" aria-controls="offcanvasWithServices">
            <i className="circle-icon fa-solid fa-car-burst fa-3x"></i>
            <p className="pt-4">SERVICES</p>
            <p>The muscle ensuring your customers vehicles are in top shape</p>
          </div>
          <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithServices" aria-labelledby="offcanvasWithServices">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasWithServices">Services</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <p>Try scrolling the rest of the page to see this option in action.</p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}