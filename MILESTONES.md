
== Milestones

The following milestones track progress toward delivering the MVP. Each milestone should include unit tests and be integrated into the DI container.

1. Project Scaffold (Day 1–2)
   - Initialize Node.js project
   - Create folder structure and install dependencies
   - Setup basic Express server and Socket.IO integration

2. User Authentication (Day 3–4)
   - JWT-based user registration and login
   - Auth middleware to protect API routes

3. Job Management (Day 5–6)
   - Implement JobRepository interface and MongoJobRepository
   - CRUD APIs for job applications using JobService

4. Reminder & Notification Framework (Day 7–8)
   - Implement ReminderService with interval-based scheduling
   - Define Notifier interface and add EmailNotifier & InAppNotifier
   - Setup CompositeNotifier to trigger both channels

5. WebSocket Gateway (Day 9)
   - Setup NotificationGateway using Socket.IO
   - InAppNotifier integration with WebSocket sessions

6. Dependency Injection & Wiring (Day 10)
   - Assemble DI container or factories for services
   - Wire all modules using interfaces

7. Testing & Mocks (Day 11–12)
   - Unit tests for JobService, ReminderService, AuthService
   - Use mocks for Notifier and Repository in tests

8. Final QA & Deployment Prep (Day 13–14)
   - Manual tests for workflows
   - Dockerfile & `.env` setup for deployment
   - README with setup instructions