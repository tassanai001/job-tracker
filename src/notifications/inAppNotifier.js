const Notifier = require("./notifier");
const gateway = require("../websocket/notificationGateway");

class InAppNotifier extends Notifier {
    constructor(notificationGateway) {
        super();
        this.gateway = notificationGateway;
    }

    send(userId, message) {
        return gateway.sendToUser(userId, message);
    }
}

module.exports = InAppNotifier;