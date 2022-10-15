"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const faker_1 = require("@faker-js/faker");
const PORT = 3000;
const app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
function createRandomUser() {
    return {
        username: faker_1.faker.internet.userName(),
        email: faker_1.faker.internet.email(),
        avatar: faker_1.faker.image.avatar(),
        password: faker_1.faker.internet.password(),
        birthdate: faker_1.faker.date.birthdate(),
        registeredAt: faker_1.faker.date.past(),
    };
}
app.get('/user', (req, res) => {
    const user = createRandomUser();
    res.json(user);
});
app.listen(PORT, () => {
    console.log("App running with port: " + PORT);
});
//# sourceMappingURL=index.js.map