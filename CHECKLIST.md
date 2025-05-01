### ✅ Job Tracker MVP – Implementation Checklist

#### 📁 Milestone 1: Project Scaffold
- [X] Initialize Node.js project with `npm init -y`
- [X] Install dependencies (`express`, `mongoose`, `jsonwebtoken`, etc.)
- [X] Set up folder structure
- [X] Basic Express app + Socket.IO setup

---

#### 🔐 Milestone 2: User Authentication
- [ ] Implement user registration with password hashing
- [ ] Implement login with JWT generation
- [ ] Create `authMiddleware` to protect private routes
- [ ] Add unit tests for `AuthService`

---

#### 📄 Milestone 3: Job Management
- [ ] Define `JobRepository` interface
- [ ] Implement `MongoJobRepository` with Mongoose
- [ ] Implement `JobService` with CRUD logic
- [ ] Create REST API routes for jobs
- [ ] Add unit tests for `JobService`

---

#### ⏰ Milestone 4: Reminder & Notification Framework
- [ ] Implement `Notifier` interface
- [ ] Implement `EmailNotifier` using Nodemailer
- [ ] Implement `InAppNotifier` using WebSockets
- [ ] Implement `ReminderService` with interval-based job check
- [ ] Integrate `CompositeNotifier` to send both types

---

#### 🔌 Milestone 5: WebSocket Gateway
- [ ] Implement `NotificationGateway` using Socket.IO
- [ ] Handle user sessions by userId via JWT on connection
- [ ] Allow `InAppNotifier` to send messages via gateway

---

#### 🧩 Milestone 6: Dependency Injection & Wiring
- [ ] Create factory functions or simple DI container
- [ ] Wire up JobService, ReminderService, Notifiers via interfaces
- [ ] Ensure no service directly instantiates concrete dependencies

---

#### 🧪 Milestone 7: Testing & Mocks
- [ ] Write unit tests for `ReminderService` using mock `Notifier`
- [ ] Write unit tests for `JobService` using mock `JobRepository`
- [ ] Write unit tests for `AuthService`

---

#### 🚀 Milestone 8: Final QA & Deployment
- [ ] Manually test full flow: register → add job → trigger reminder
- [ ] Add Dockerfile and `.env.example`
- [ ] Add README with setup + run instructions