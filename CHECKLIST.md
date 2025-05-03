### ✅ Job Tracker MVP – Implementation Checklist

#### 📁 Milestone 1: Project Scaffold
- [X] Initialize Node.js project with `npm init -y`
- [X] Install dependencies (`express`, `mongoose`, `jsonwebtoken`, etc.)
- [X] Set up folder structure
- [X] Basic Express app + Socket.IO setup

---

#### 🔐 Milestone 2: User Authentication
- [X] Implement user registration with password hashing
- [X] Implement login with JWT generation
- [X] Create `authMiddleware` to protect private routes
- [X] Add unit tests for `AuthService`

---

#### 📄 Milestone 3: Job Management
- [X] Define `JobRepository` interface
- [X] Implement `MongoJobRepository` with Mongoose
- [X] Implement `JobService` with CRUD logic
- [X] Create REST API routes for jobs
- [X] Add unit tests for `JobService`

---

#### ⏰ Milestone 4: Reminder & Notification Framework
- [X] Implement `Notifier` interface
- [X] Implement `EmailNotifier` using Nodemailer
- [X] Implement `InAppNotifier` using WebSockets
- [X] Implement `ReminderService` with interval-based job check
- [X] Integrate `CompositeNotifier` to send both types

---

#### 🔌 Milestone 5: WebSocket Gateway
- [X] Implement `NotificationGateway` using Socket.IO
- [X] Handle user sessions by userId via JWT on connection
- [X] Allow `InAppNotifier` to send messages via gateway

---

#### 🧩 Milestone 6: Dependency Injection & Wiring
- [X] Create factory functions or simple DI container
- [X] Wire up JobService, ReminderService, Notifiers via interfaces
- [X] Ensure no service directly instantiates concrete dependencies

---

#### 🧪 Milestone 7: Testing & Mocks
- [X] Write unit tests for `ReminderService` using mock `Notifier`
- [X] Write unit tests for `JobService` using mock `JobRepository`
- [X] Write unit tests for `AuthService`

---

#### 🚀 Milestone 8: Final QA & Deployment
- [ ] Manually test full flow: register → add job → trigger reminder
- [ ] Add Dockerfile and `.env.example`
- [ ] Add README with setup + run instructions