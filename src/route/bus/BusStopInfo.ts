import * as Router from "koa-router";
import { Context, Next } from "koa";
import Axios from "axios";
import { BUS_API_URL } from "../../app/config";

const urlPrefix = "/bus/stopInfo";

const getStops = async (ctx: Context, next: Next): Promise<void> => {
  const { data: ttssResponse } = await Axios.get(
    `${BUS_API_URL}/geoserviceDispatcher/services/stopinfo/stops?left=-648000000&bottom=-324000000&right=648000000&top=324000000`
  );

  ctx.body = ttssResponse;

  await next();
};

const BusStopInfo = (router: Router) => {
  router.get(`${urlPrefix}/stops`, getStops);
};

export default BusStopInfo;
