import * as Router from "koa-router";
import { Context, Next } from "koa";
import Axios from "axios";
import { TRAM_API_URL } from "../../app/config";

const urlPrefix = "/tram/passageInfo";

const getStops = async (ctx: Context, next: Next): Promise<void> => {
  const id = ctx.params.id;

  const { data: ttssResponse } = await Axios.get(
    `${TRAM_API_URL}/services/passageInfo/stopPassages/stop?stop=${id}`
  );

  ctx.body = ttssResponse;

  await next();
};

const getStopPoints = async (ctx: Context, next: Next): Promise<void> => {
  const id = ctx.params.id;

  const { data: ttssResponse } = await Axios.get(`${TRAM_API_URL}/services/routeInfo/routeStops?routeId=${id}`);

  ctx.body = ttssResponse;

  await next();
};

const TramPassageInfo = (router: Router) => {
  router.get(`${urlPrefix}/stops/:id`, getStops);
  router.get(`${urlPrefix}/stopPoints/:id`, getStopPoints);
};

export default TramPassageInfo;
