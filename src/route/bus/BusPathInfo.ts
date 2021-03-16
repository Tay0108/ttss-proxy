import * as Router from "koa-router";
import { Context, Next } from "koa";
import Axios from "axios";
import { BUS_API_URL } from "../../app/config";

const urlPrefix = "/bus/pathInfo";

const getRoute = async (ctx: Context, next: Next): Promise<void> => {
  const id = ctx.params.id;
  const direction = ctx.params.direction;

  const { data: ttssResponse } = await Axios.get(
    `${BUS_API_URL}/geoserviceDispatcher/services/pathinfo/route?id=${id}&direction=${direction}`
  );

  ctx.body = ttssResponse;

  await next();
};

const getVehicles = async (ctx: Context, next: Next): Promise<void> => {
  const id = ctx.params.id;

  const { data: ttssResponse } = await Axios.get(
    `${BUS_API_URL}/geoserviceDispatcher/services/pathinfo/vehicle?id=${id}`
  );

  ctx.body = ttssResponse;

  await next();
};

const BusPathInfo = (router: Router) => {
  router.get(`${urlPrefix}/route/:id/:direction`, getRoute);
  router.get(`${urlPrefix}/vehicle/:id`, getVehicles);
};

export default BusPathInfo;
