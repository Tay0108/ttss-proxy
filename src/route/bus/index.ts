import * as Router from 'koa-router';

import BusPassageInfo from './BusPassageInfo';
import BusPathInfo from './BusPathInfo';
import BusRouteInfo from './BusRouteInfo';
import BusStopInfo from './BusStopInfo';
import BusTripInfo from './BusTripInfo';
import BusVehicleInfo from './BusVehicleInfo';

const bus = (router: Router): void => {
  BusPassageInfo(router);
  BusPathInfo(router);
  BusRouteInfo(router);
  BusStopInfo(router);
  BusTripInfo(router);
  BusVehicleInfo(router);
};

export default bus;