import * as Router from 'koa-router';

import TramPassageInfo from './TramPassageInfo';
import TramPathInfo from './TramPathInfo';
import TramRouteInfo from './TramRouteInfo';
import TramStopInfo from './TramStopInfo';
import TramTripInfo from './TramTripInfo';
import TramVehicleInfo from './TramVehicleInfo';

const tram = (router: Router): void => {
  TramPassageInfo(router);
  TramPathInfo(router);
  TramRouteInfo(router);
  TramStopInfo(router);
  TramTripInfo(router);
  TramVehicleInfo(router);
};

export default tram;