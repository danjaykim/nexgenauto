import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <div className="hero-container p-5 my-4">
      <div className="hero-text">
        <h1 className="hero-title display-5 fw-bold border-bottom opacity-75">CarCar</h1>
        <p className="lead col-md-8 fs-4 opacity-75 pt-2">The premiere solution for automobile dealership management</p>
      </div>
      <Link className="hero-btn" to="/models">button</Link>
    </div>
  );
}