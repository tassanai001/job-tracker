class ReminderService {
    constructor(jobRepo, notifier) {
        this.repo = jobRepo;
        this.notifier = notifier;
    }

    async checkAndNotify() {
        const now = new Date();
        const dueJobs = await this.repo.findDueReminders(now);
        for (const job of dueJobs) {
            await this.notifier.send(job.userId, `Reminder: ${job.title}`);
        }
    }

    start(intervalMs = 60000) {
        setInterval(() => this.checkAndNotify(), intervalMs);
    }
}

module.exports = ReminderService;
