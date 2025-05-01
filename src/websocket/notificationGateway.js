const connectedClients = new Map();

const verifyTokenAndExtractUserId = (token) => {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return decoded.userId;
    } catch (error) {
        throw new Error("Invalid token");
    }
};

function setup(io) {
    io.on("connection", (socket) => {
        const token = socket.handshake.auth.token;
        const userId = verifyTokenAndExtractUserId(token);
        connectedClients.set(userId, socket);

        socket.on("disconnect", () => {
            connectedClients.delete(userId);
        });
    });
}

function sendToUser(userId, message) {
    const socket = connectedClients.get(userId);
    if (socket) {
        socket.emit("notification", message);
    }
}
