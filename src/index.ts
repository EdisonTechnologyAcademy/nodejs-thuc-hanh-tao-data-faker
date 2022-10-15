import express, { Express, Request, Response } from "express";
import bodyParser from 'body-parser';
import { faker } from '@faker-js/faker';

const PORT = 3000;
const app: Express = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

type User = {
  username: string,
  email: string,
  avatar: string,
  password: string,
  birthdate: Date,
  registeredAt: Date
}

function createRandomUser(): User {
  return {
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}

app.get('/user', (req, res) => {
  const user = createRandomUser();
  res.json(user);
})

app.listen(PORT, () => {
  console.log("App running with port: " + PORT);
});