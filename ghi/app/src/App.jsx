import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Nav from "./Nav";
import ManufacturerList from "./ManufacturerList"
import ManufacturerForm from "./ManufacturerForm"
import ModelList from "./ModelList"
import ModelForm from "./ModelForm"
import AutoList from "./AutoList"
import AutoForm from "./AutoForm"
import SalesPeopleList from "./SalesPeopleList"
import SalesPersonForm from "./SalesPersonForm"
import CustomerList from "./CustomerList"
import CustomerForm from "./CustomerForm"
import SaleList from "./SaleList"
import SaleForm from "./SaleForm"
import SalesHistory from "./SalesHistory"
import TechnicianList from "./TechnicianList"
import TechnicianForm from "./TechnicianForm"
import ServiceList from "./ServiceList"
import ServiceForm from "./ServiceForm"
import ServiceHistory from "./ServiceHistory"




export default function App() {
	return (
		<BrowserRouter>
			<div className="main-containers">
				<Nav />
			</div>
			<div>
				<Routes>
					<Route path="/" element={<MainPage />} />
				</Routes>
			</div>
			<div className="main-containers">
				<Routes>
					<Route path="/manufacturers" element={<ManufacturerList />} />
					<Route path="/manufacturers/create" element={<ManufacturerForm />} />
					<Route path="/models" element={<ModelList />} />
					<Route path="/models/create" element={<ModelForm />} />
					<Route path="/automobiles" element={<AutoList />} />
					<Route path="/automobiles/create" element={<AutoForm />} />
					<Route path="/salespeople" element={<SalesPeopleList />} />
					<Route path="/salespeople/create" element={<SalesPersonForm />} />
					<Route path="/customers" element={<CustomerList />} />
					<Route path="/customers/create" element={<CustomerForm />} />
					<Route path="/sales" element={<SaleList />} />
					<Route path="/sales/create" element={<SaleForm />} />
					<Route path="/sales/history" element={<SalesHistory />} />
					<Route path="/technicians" element={<TechnicianList />} />
					<Route path="/technicians/create" element={<TechnicianForm />} />
					<Route path="/appointments" element={<ServiceList />} />
					<Route path="/appointments/create" element={<ServiceForm />} />
					<Route path="/appointments/history" element={<ServiceHistory />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}