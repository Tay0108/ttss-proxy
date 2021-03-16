import * as Router from "koa-router";
import { Context, Next } from "koa";
import Axios from "axios";
import { BUS_API_URL } from "../../app/config";

const urlPrefix = "/bus/tripInfo";

const getTripPassages = async (ctx: Context, next: Next): Promise<void> => {
  const id = ctx.params.id;

  const { data: ttssResponse } = await Axios.get(
    `${BUS_API_URL}/services/tripInfo/tripPassages?tripId=${id}&mode=departure`
  );

  ctx.body = ttssResponse;

  await next();
};

const BusTripInfo = (router: Router) => {
  router.get(`${urlPrefix}/tripPassages/:id`, getTripPassages);
};

export default BusTripInfo;
