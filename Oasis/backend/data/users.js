import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@email.com',
    // Encrypt the password using bcrypt
    password: bcrypt.hashSync('123456', 10),
    image: '/images/users/user_3.jpg',
    phone: '1234-5678'
  },
  {
    name: 'John doe',
    email: 'jhon@email.com',
    password: bcrypt.hashSync('123456', 10),
    image: '/images/users/user_2.jpg',
    phone: '1234-8888'
  },
  {
    name: 'Jane doe',
    email: 'jane@email.com',
    password: bcrypt.hashSync('123456', 10),
    image: '/images/users/user_1.jpg',
    phone: '1234-9999'
  },
]

export default users;