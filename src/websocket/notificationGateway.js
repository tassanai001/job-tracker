const jwt = require("jsonwebtoken");
const clientManager = require("./clientManager");

const JWT_SECRET = process.env.JWT_SECRET;

const verifyTokenAndExtractUserId = (token) => {
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        return decoded.userId;
    } catch (error) {
        throw new Error("Invalid token");
    }
};

function setup(io) {

    io.use((socket, next) => {
        const token = socket.handshake.auth.token;
        if (!token) {
            return next(new Error("No token provided"));
        }
        try {
            const payload = jwt.verify(token, JWT_SECRET);
            const userId = payload.userId;
            socket.userId = userId;
            next();
        } catch (error) {
            return next(new Error("Invalid token"));
        }
    });


    io.on("connection", (socket) => {
        const userId = socket.userId;
        console.log(`✅ User connected via WS: ${userId}`);

        clientManager.register(userId, socket);

        socket.on("disconnect", () => {
            clientManager.unregister(userId);
            console.log(`❌ User disconnected via WS: ${userId}`);
        });
    });
}

function sendToUser(userId, message) {
    const socket = clientManager.getClient(userId);
    if (socket) {
        socket.emit("notification", message);
    }
}

module.exports = {
    setup,
    sendToUser,
};
