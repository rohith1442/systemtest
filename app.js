import express, { json, urlencoded } from "express";
import { Datastore } from "./src/integrations/datastore.js";

export default class Service {
  constructor() {
    this.app = express();
    this.app.use(json({ limit: "10mb" }));
    this.app.use(urlencoded({ extended: true }));
  }

  async initdb() {
    try {
      const db = await Datastore.getSequelize();
      console.log("Database initialized");
    } catch (err) {
      console.error(err.stack);
      throw err;
    }
  }

  addRoute(method, path, handler) {
    this.app[method.toLowerCase()](path, async (req, res, next) => {
      try {
        const result = await handler(req, res);
        res.json(result);
      } catch (err) {
        next(err);
      }
    });
  }

  async addRouter(path, router) {
    this.app.use(path, router);
  }

  async listen(port) {
    this.app.listen(port, (err) => {
      if (err) {
        console.error("Error starting server:", err);
      } else {
        console.log(`Listening on port ${port}`);
      }
    });
  }
  async start(port) {
    try {
      setTimeout(async () => {
        await this.initdb();
      }, 2000);
      this.addRoute("get", "/test", async (req, res) => {
        return { message: "API is working!" };
      });

      await this.listen(port);
    } catch (err) {
      console.error("Error starting the service:", err);
      throw err;
    }
  }
}
