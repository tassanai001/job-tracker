exports.createJob = async (req, res) => {
    try {
        const job = await req.jobService.createJob(req.user.userId, req.body);
        res.status(201).json(job);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getJobs = async (req, res) => {
    try {
        const jobs = await req.jobService.getJobs(req.user.userId);
        res.status(200).json(jobs);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateJob = async (req, res) => {
    try {
        const job = await req.jobService.updateJob(req.params.id, req.body);
        res.status(200).json(job);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteJob = async (req, res) => {
    try {
        const job = await req.jobService.deleteJob(req.params.id);
        res.status(200).json(job);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
