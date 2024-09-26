import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import UsersModel from "../models/users.model.js";

export default class AuthService {
  constructor() {}

  async register(body) {
    try {
      const { email, password } = body;
      await this.validateIFUserExists(email);

      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await UsersModel.create({ email, password: hashedPassword });

      return user;
    } catch (err) {
      throw err;
    }
  }

  async validateIFUserExists(email) {
    try {
      const query = {
        where: { email },
      };
      const user = await UsersModel.findAll(query);

      if (user.length) {
        throw new Error("User already exists");
      }

      return true;
    } catch (err) {
      throw err;
    }
  }
}
