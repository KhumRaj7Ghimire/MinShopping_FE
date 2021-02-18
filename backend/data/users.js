import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Khumraj",
    email: "khumraj@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Aashish",
    email: "Aashish@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
