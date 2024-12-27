# 22bcs14608_poonam
Smart Traffic Management System
A full-stack web application that simulates traffic data from sensors, stores the data in MongoDB, and displays real-time traffic updates using a dashboard. This system allows traffic management without physical hardware, simulating traffic data and visualizing it in real-time.

Features
Real-Time Traffic Data: Traffic flow data is simulated every 2 seconds and displayed in real-time.
MongoDB Database: Traffic data is stored in a MongoDB database.
Socket.io: Real-time communication is achieved using Socket.io to push updates to the frontend.
React Dashboard: A dynamic dashboard displays traffic data with updates every time new data is received from the backend.
Node.js/Express.js Backend: Handles the API for traffic data and simulates sensor data.
Tech Stack
Frontend: React.js
Backend: Node.js, Express.js, MongoDB, Socket.io
Database: MongoDB
Real-Time Communication: Socket.io
Simulated Data: Using Axios for sending traffic data
Installation
1. Clone the Repository
bash
Copy code
git clone https://github.com/yourusername/smart-traffic-system.git
cd smart-traffic-system
2. Backend Setup
2.1. Install Dependencies
Navigate to the root of the project and install the necessary backend dependencies:

bash
Copy code
npm install
2.2. Run MongoDB
Ensure you have MongoDB installed and running locally. If you don't have MongoDB installed, you can follow the MongoDB installation guide.

Start MongoDB:

bash
Copy code
mongod
2.3. Start the Backend Server
To run the backend server, use the following command:

bash
Copy code
node server.js
The backend server will be running on http://localhost:5000.

2.4. Simulate Sensor Data
To simulate traffic data being sent to the backend, run the following script in a separate terminal:

bash
Copy code
node simulateSensors.js
This will send random traffic data to the backend every 2 seconds.

3. Frontend Setup
3.1. Install React Dependencies
Navigate to the client directory and install the frontend dependencies:

bash
Copy code
cd client
npm install
3.2. Start the React Application
To start the React application, run:

bash
Copy code
npm start
The React app will be running on http://localhost:3000.

4. Access the Dashboard
Once the backend server and the React application are running, open your browser and navigate to:

bash
Copy code
http://localhost:3000
You will be able to see the real-time traffic data on the dashboard.

Project Structure
perl
Copy code
smart-traffic-system/
├── client/               # React app folder
│   ├── node_modules/     # React dependencies
│   ├── public/           # Public folder
│   ├── src/              # React source code
│   │   ├── App.js        # React component
│   │   ├── index.js      # React entry point
│   ├── package.json      # React dependencies
│   └── package-lock.json
├── server.js             # Backend server (Node.js & Express)
├── simulateSensors.js    # Script to simulate sensor data
├── package.json          # Backend dependencies
└── package-lock.json     # Backend lock file
Contributing
If you'd like to contribute to this project, feel free to fork it, create a branch, and submit a pull request. We welcome improvements, bug fixes, and feature additions.

Fork the repository.
Create a new branch (git checkout -b feature-name).
Make your changes.
Commit your changes (git commit -m 'Add a feature').
Push to the branch (git push origin feature-name).
Create a pull request.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
Socket.io for real-time communication.
MongoDB for database management.
React.js for the dynamic frontend.
Express.js for building the backend API
