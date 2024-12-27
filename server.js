const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/traffic', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const trafficSchema = new mongoose.Schema({
    sensorId: String,
    trafficFlow: Number,
    timestamp: { type: Date, default: Date.now },
});

const Traffic = mongoose.model('Traffic', trafficSchema);

app.get('/api/traffic', async(req, res) => {
    const trafficData = await Traffic.find().sort({ timestamp: -1 }).limit(10);
    res.json(trafficData);
});

io.on('connection', (socket) => {
    console.log('New client connected:', socket.id);
});

const PORT = 5000;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});