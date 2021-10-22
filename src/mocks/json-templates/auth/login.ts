import jwt from 'jsonwebtoken';

const contentJWT = {
  "id": "asd-123",
  "name": "Mário Bross da Silva Sauro",
  "email": "mario.bross@nintendo.com",
  "permissions": [
    "DASHBOARD"
  ],
  "rullersOperation" : [
    "READING",
    "WRITING",
    "CREATE",
    "DELETE",
  ],
  "rullersFuntion" : [
    "BASIC",
    "ADMIN",
    "SUPER_ADMIN",
  ],
}
const token = jwt.sign(contentJWT, 'shhhhh');

export const loginTemplate = {
  accessToken: token,
};
