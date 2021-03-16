import * as Router from "koa-router";
import { Context, Next } from "koa";
import Axios from "axios";
import { BUS_API_URL } from "../../app/config";

const urlPrefix = "/bus/routeInfo";

const getRouteStops = async (ctx: Context, next: Next): Promise<void> => {
  const id = ctx.params.id;

  const { data: ttssResponse } = await Axios.get(
    `${BUS_API_URL}/services/routeInfo/routeStops?routeId=${id}`
  );

  ctx.body = ttssResponse;

  await next();
};

const BusRouteInfo = (router: Router) => {
  router.get(`${urlPrefix}/routeStops/:id`, getRouteStops);
};

export default BusRouteInfo;
