const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const AuthService = require('../auth/authService');
const User = require('../auth/userModel');

jest.mock('../auth/userModel');

describe('AuthService', () => {
  afterEach(() => jest.clearAllMocks());

  it('should register a new user', async () => {
    User.findOne.mockResolvedValue(null);
    User.create.mockResolvedValue({ _id: 'id123', email: 'test@mail.com' });

    const result = await AuthService.register({ email: 'test@mail.com', password: '123456' });
    expect(result.email).toBe('test@mail.com');
    expect(User.create).toHaveBeenCalled();
  });

  it('should login and return token', async () => {
    const passwordHash = await bcrypt.hash('123456', 10);
    User.findOne.mockResolvedValue({ _id: 'user1', email: 'test@mail.com', passwordHash });

    const result = await AuthService.login({ email: 'test@mail.com', password: '123456' });
    const decoded = jwt.verify(result.token, process.env.JWT_SECRET || 'supersecret');

    expect(decoded.userId).toBe('user1');
  });
});
