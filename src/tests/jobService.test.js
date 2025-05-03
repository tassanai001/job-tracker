const JobService = require('../jobs/jobService');

describe('JobService', () => {
  const mockRepo = {
    create: jest.fn(),
    findByUser: jest.fn(),
    update: jest.fn(),
    delete: jest.fn()
  };

  const service = new JobService(mockRepo);

  it('should create a job for a user', async () => {
    await service.createJob('user1', { role: 'Dev' });
    expect(mockRepo.create).toHaveBeenCalledWith(expect.objectContaining({ role: 'Dev', userId: 'user1' }));
  });

  it('should fetch jobs by user', async () => {
    mockRepo.findByUser.mockResolvedValue([{ role: 'Dev' }]);
    const jobs = await service.getJobs('user1');
    expect(jobs[0].role).toBe('Dev');
  });
});
