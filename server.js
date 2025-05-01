const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const authRoutes = require('./src/auth/authRoutes');
const jobRoutes = require('./src/jobs/jobRoutes');

const app = express();
const server = http.createServer(app);

const PORT = process.env.PORT || 3000;

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
    path: "/ws",
});

// Middlewares
app.use(cors());
app.use(express.json());

// Socket.IO logic
io.on("connection", (socket) => {
    console.log(`User connected: ${socket.id}`);
    socket.on("disconnect", () => {
        console.log(`User disconnected: ${socket.id}`);
    });
});

// Health check route
app.get("/health", (req, res) => {
    res.json({ message: "Job Tracker API is running" });
});

// Routes
app.use('/auth', authRoutes);
app.use('/jobs', jobRoutes);

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
