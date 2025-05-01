const nodemailer = require("nodemailer");
const Notifier = require("./notifier");

class EmailNotifier extends Notifier {
    constructor() {
        super();
        this.transporter = nodemailer.createTransport({
            secure: true,
            service: process.env.EMAIL_SERVICE,
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });
    }

    async send(userId, message) {
        const user = this.users[userId];
        if (!user) {
            throw new Error("User not found");
        }
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: user.email,
            subject: "Job Tracker Reminder",
            text: message,
        };
        return this.transporter.sendMail(mailOptions);
    }
}

module.exports = EmailNotifier;