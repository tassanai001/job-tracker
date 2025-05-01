const Notifier = require("./notifier");

class InAppNotifier extends Notifier {
    constructor(notificationGateway) {
        super();
        this.gateway = notificationGateway;
    }

    send(userId, message) {
        return this.gateway.sendToUser(userId, message);
    }
}

module.exports = InAppNotifier;