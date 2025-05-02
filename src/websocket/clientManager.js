const clients = new Map();

function register(userId, socket) {
    clients.set(userId, socket);
}

function unregister(userId) {
    clients.delete(userId);
}

function getClient(userId) {
    return clients.get(userId);
}

module.exports = {
    register,
    unregister,
    getClient,
};