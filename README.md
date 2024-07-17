# CarCar
****
## Team

##### Max Vuong - Service
##### Daniel Kim - Sales

## How to setup the project
****
1. fork/clone the repo
2. run the command `docker volume create beta-data`
3. run the command `docker-compose build`
4. run the command `docker-compose up`
5. your front end page will be accessible at http://localhost:5173/

## Design Diagram
****
![The DDD diagram image should be here](./Project-BETA-DDD.PNG)

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
Explain your models and integration with the inventory
microservice, here.
