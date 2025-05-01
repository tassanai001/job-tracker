const Job = require("./jobModel");

class MongoJobRepository {
    async create(job) {
        return await Job.create(job);
    }
    async findByUser(userId) {
        return await Job.find({ userId });
    }
    async update(id, job) {
        return await Job.findByIdAndUpdate(id, job, { new: true });
    }
    async delete(id) {
        return await Job.findByIdAndDelete(id);
    }
}

module.exports = MongoJobRepository;

