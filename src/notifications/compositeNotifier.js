const Notifier = require("./notifier");

class CompositeNotifier extends Notifier {
    constructor(notifiers) {
        super();
        this.notifiers = notifiers;
    }

    send(userId, message) {
        return Promise.all(this.notifiers.map(notifier => notifier.send(userId, message)));
    }
}

module.exports = CompositeNotifier;
