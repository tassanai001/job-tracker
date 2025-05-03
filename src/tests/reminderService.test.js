const ReminderService = require('../notifications/reminders/reminderService');

describe('ReminderService', () => {
  it('should send reminders for due jobs', async () => {
    const mockRepo = {
      findDueReminders: jest.fn().mockResolvedValue([
        { userId: 'user123', company: 'Acme Corp' }
      ])
    };

    const mockNotifier = {
      send: jest.fn()
    };

    const reminderService = new ReminderService(mockRepo, mockNotifier);
    await reminderService.checkAndNotify();

    expect(mockRepo.findDueReminders).toHaveBeenCalled();
    expect(mockNotifier.send).toHaveBeenCalledWith('user123', expect.stringContaining('Acme Corp'));
  });
});
