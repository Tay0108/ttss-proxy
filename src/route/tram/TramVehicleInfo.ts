import * as Router from "koa-router";
import { Context, Next } from "koa";
import Axios from "axios";
import { TRAM_API_URL } from "../../app/config";

const urlPrefix = "/tram/vehicleInfo";

const getVehicles = async (ctx: Context, next: Next): Promise<void> => {
  const { data: ttssResponse } = await Axios.get(
    `${TRAM_API_URL}/geoserviceDispatcher/services/vehicleinfo/vehicles?positionType=CORRECTED`
  );

  ctx.body = ttssResponse;

  await next();
};

const TramVehicleInfo = (router: Router) => {
  router.get(`${urlPrefix}/vehicles`, getVehicles);
};

export default TramVehicleInfo;
