import AuthService from "../services/auth.service.js";

export default class AuthController {
  constructor() {
    this.authService = new AuthService();
  }

  register = async (req, res) => {
    try {
      const body = req.body;
      const resp = await this.authService.register(body);
      res.status(201).json({ message: "USER REGISTERED Success", resp });
    } catch (err) {
      res.status(500).json({ error: "Failed to register user", message: err.message });
    }
  }

  healthCheck = async (req, res) => {
    try {
      const healthcheck = { title: "systemTest" };
      res.status(200).json({ message: "healthcheck", healthcheck });
    } catch (err) {
      res.status(500).json({ error: "error", err });
    }
  }
}
