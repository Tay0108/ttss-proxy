import * as Koa from "koa";
import * as Router from "koa-router";

import * as cors from "@koa/cors";
import * as logger from "koa-logger";
import * as json from "koa-json";
import * as bodyParser from "koa-bodyparser";

import * as dotenv from "dotenv";

import route from "../route";

class App {
  private static instance: App;
  private app = new Koa();
  private router = new Router();

  private PORT = process.env.PORT || 3003;

  private constructor() {
    dotenv.config();
    this.app.use(cors());
    this.app.use(json());
    this.app.use(logger());
    this.app.use(bodyParser());
    this.app.use(this.router.routes()).use(this.router.allowedMethods());

    route(this.router);
  }

  public static getInstance(): App {
    if (!App.instance) {
      App.instance = new App();
    }

    return App.instance;
  }

  public start(): void {
    this.app.listen(this.PORT, () =>
      console.log(`App started on port ${this.PORT}`)
    );
  }
}

export default App;
