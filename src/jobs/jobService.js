class JobService {
    constructor(jobRepo) {
        this.repo = jobRepo;
    }

    createJob(userId, jobData) {
        return this.repo.create({ userId, ...jobData });
    }

    getJobs(userId) {
        return this.repo.findByUser(userId);
    }

    updateJob(id, jobData) {
        return this.repo.update(id, jobData);
    }

    deleteJob(id) {
        return this.repo.delete(id);
    }
}

module.exports = JobService;