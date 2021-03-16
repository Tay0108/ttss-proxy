import * as Router from "koa-router";
import { Context, Next } from "koa";
import Axios from "axios";
import { TRAM_API_URL } from "../../app/config";

const urlPrefix = "/tram/pathInfo";

const getRoute = async (ctx: Context, next: Next): Promise<void> => {
  const id = ctx.params.id;
  const direction = ctx.params.direction;

  const { data: ttssResponse } = await Axios.get(
    `${TRAM_API_URL}/geoserviceDispatcher/services/pathinfo/route?id=${id}&direction=${direction}`
  );

  ctx.body = ttssResponse;

  await next();
};

const getVehicle = async (ctx: Context, next: Next): Promise<void> => {
  const id = ctx.params.id;

  const { data: ttssResponse } = await Axios.get(
    `${TRAM_API_URL}/geoserviceDispatcher/services/pathinfo/vehicle?id=${id}`
  );

  ctx.body = ttssResponse;

  await next();
};

const TramPathInfo = (router: Router) => {
  router.get(`${urlPrefix}/route/:id/:direction`, getRoute);
  router.get(`${urlPrefix}/vehicle/:id`, getVehicle);
};

export default TramPathInfo;
