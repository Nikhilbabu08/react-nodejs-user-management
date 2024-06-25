# Full Stack User Management Application

This project is a full-stack SaaS application designed for user registration, login, and profile viewing. The application uses React for the front end, Node.js for the back end, and MySQL for data storage. 


## Features
- Backend Development: Powered by Express.js, our backend infrastructure ensures swift and reliable performance, setting the stage for culinary adventures without bounds.
- JWT Authentication: Security takes center stage with our implementation of JWT authentication, ensuring every interaction is safeguarded with utmost precision.
- Data Integrity: Experience peace of mind with Express Validator, ensuring every input is rigorously validated, maintaining the integrity of your culinary creations.
- Frontend UI: Immerse yourself in an unparalleled user interface, meticulously crafted with React.js.
- State Management: Redux is used in this project to manage the application state in a predictable way.
# Installation

## Backend

```bash
  git clone https://github.com/Nikhilbabu08/react-nodejs-user-management.git
  cd server
  npm install

```
.env setup
```bash
DB_HOST=your_db_host
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=your_db_name
JWT_SECRET=your_db_secret_key
```
start server
```bash
npm start
```
## Frondend
```bash
cd client
npm install
npm run dev
```
    
# Deployment
## Deploying on AWS
- Create an AWS EC2 instance with the free tier.
- SSH into the instance and install Node.js, npm, and MySQL.
- Set up an MySQL on EC2 instance for MySQL database storage.
- Clone the repository onto the server.
- Set up the environment variables and database as described in the Installation section.
- Start the backend server and ensure it's running.
- Build the React app:
```bash
cd client
npm run build
```
- Serve the React app by integrating it with the backend.
# Usage
- Open your browser and navigate to http://ec2-3-27-76-107.ap-southeast-2.compute.amazonaws.com to view the application.
- Use the registration page to create a new account.
- Log in using your credentials.
- View your profile & All users list.
