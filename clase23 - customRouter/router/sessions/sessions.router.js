import jwt from "jsonwebtoken";
import  RuteoApp from '../app.router.js'

const SECRET_ID = "secret-id";

export class SessionsRouter extends RuteoApp {
  init() {
    this.post('/login', ["PUBLIC"], (req, res) => {
      const user = {
        email: req.body.email,
        role: req.body.email.split("@")[1].includes("admin") ? "admin" : "user"
      };
      const auth_token = jwt.sign(user, SECRET_ID);
      res.sendSuccess({ auth_token });
    })
  }
}

export default new SessionsRouter();