# CarCar
****
## Team

##### Max Vuong - Service
##### Daniel Kim - Sales

## Design
****
## Service microservice
****
##### Models
**AutomobileVO**
all automobile data is pulled from the Inventory microservice
- import_href:the import href for the automobile
- vin: the vin for the automobile
- sold: a boolean for if the vehicle has been sold

**Technician**
- first_name: the first name for the technician
- last_name: the last name for the technician
- employee_id: the employee ID for the technician

**Appointment**
- date: the date for the appointment
- time: the time for the appointment
- reason: the reason for the appointment
- status: the status of the appointment, Default is "in progress"
- vin: the vin for the automobile being worked on for the appointment
- customer: the customer for the appointment
- technician: a foreign key to the technician working on this appointment

##### API Methods
**http://localhost:8080/api/technicians/**
- GET: returns a list of all technicians
- POST: adds a technician to the the database

**http://localhost:8080/api/technicians/:id/**
- DELETE: deletes the technician at the specified database ID

**http://localhost:8080/api/appointments/**
- GET: returns a list of all appointments
- POST: adds an appointment to the database

**http://localhost:8080/api/appointments/:id/**
- Get: returns all details for a single appointment
- DELETE: deletes the appointment at the specified database ID

**http://localhost:8080/api/appointments/:id/cancel/**
- PUT: sets the appointment at the specified database ID to cancelled

**http://localhost:8080/api/appointments/:id/finish/**
- PUT: sets the appointment at the specified database ID to finished

## Sales microservice
****
##### Models
**AutomobileVO** - A value object representing all of our automobiles/vehicles. 
- All automobile data is pulled from the Inventory microservice.
- vin: The vin of the automobile
- sold: A boolean value that represents if the vehicle is available or sold

**Salesperson** - An integral part of our organization responsible for selling our vehicles
- first_name: The first name of the salesperson employee
- last_name: The last name of the salesperson employee
- employee_id: The employee ID for the salesperson employee

**Customer** - Valued individuals who play an important role in driving revenue through purchasing/servicing
- first_name: The first name of the customer
- last_name: The last name of the customer
- address: The residence of the customer
- phone_number: The ten-digit contact number of the customer

**Sale** - Represents a vehicle sale
- automobile: A foreign key to the vehicle that was sold
- salesperson: A foreign key linked to the salesperson who made the sale
- customer: A foreign key linked to the customer who purchased the vehicle
- price: The cost in USD that was vehicle was purchased for

##### API Methods
**http://localhost:8090/api/salespeople/**
- GET: Returns a list of all salespeople in the database
- POST: Creates/adds a new salesperson to the database

**http://localhost:8090/api/salespeople/:id/**
- GET: Returns the details of a salesperson at the specified ID
- PUT: Updates details of a salesperson at the specified ID
- DELETE: Deletes a salesperson at the specified ID

**http://localhost:8090/api/customers/**
- GET: Returns a list of all customers in the database
- POST: Creates/adds a new customer to the database

**http://localhost:8090/api/customers/:id/**
- GET: Returns the details of a customer at the specified ID
- PUT: Updates details of a customer at the specified ID
- DELETE: Deletes a customer at the specified ID

**http://localhost:8090/api/sales/**
- GET: Returns a list of all sales in the database
- POST: Creates/adds a new sale to the database

**http://localhost:8090/api/sales/:id/**
- GET: Returns the details of a sale at the specified ID
- PUT: Updates details of a sale at the specified ID
- DELETE: Deletes a sale at the specified ID
