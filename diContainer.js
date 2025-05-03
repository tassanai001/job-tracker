const MongoJobRepository = require('./src/jobs/mongoJobRepository');
const JobService = require('./src/jobs/jobService');
const ReminderService = require('./src/notifications/reminders/reminderService');

const EmailNotifier = require('./src/notifications/emailNotifier');
const InAppNotifier = require('./src/notifications/inAppNotifier');
const CompositeNotifier = require('./src/notifications/compositeNotifier');

const notificationGateway = require('./src/websocket/notificationGateway');

function createJobService() {
  const jobRepo = new MongoJobRepository();
  return new JobService(jobRepo);
}

function createReminderService() {
  const jobRepo = new MongoJobRepository();
  const emailNotifier = new EmailNotifier();
  const inAppNotifier = new InAppNotifier(notificationGateway);
  const compositeNotifier = new CompositeNotifier([emailNotifier, inAppNotifier]);
  return new ReminderService(jobRepo, compositeNotifier);
}

module.exports = {
  createJobService,
  createReminderService
};