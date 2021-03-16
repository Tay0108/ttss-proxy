import * as Router from "koa-router";
import bus from "./bus";
import tram from "./tram";

const route = (router: Router): void => {
  bus(router);
  tram(router);
};

export default route;
