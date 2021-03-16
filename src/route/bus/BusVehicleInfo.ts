import * as Router from "koa-router";
import { Context, Next } from "koa";
import Axios from "axios";
import { BUS_API_URL } from "../../app/config";

const urlPrefix = "/bus/vehicleInfo";

const getVehicles = async (ctx: Context, next: Next): Promise<void> => {
  const { data: ttssResponse } = await Axios.get(
    `${BUS_API_URL}/geoserviceDispatcher/services/vehicleinfo/vehicles?positionType=CORRECTED`
  );

  ctx.body = ttssResponse;

  await next();
};

const BusVehicleInfo = (router: Router) => {
  router.get(`${urlPrefix}/vehicles`, getVehicles);
};

export default BusVehicleInfo;
