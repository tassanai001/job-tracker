const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true },
    company: String,
    role: String,
    status: String,
    tags: [String],
    notes: String,
    reminderAt: [Date],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Job", jobSchema);