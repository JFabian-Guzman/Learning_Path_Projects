import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@email.com',
    // Encrypt the password using bcrypt
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'John doe',
    email: 'jhon@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
  {
    name: 'Jane doe',
    email: 'jane@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
]

export default users;