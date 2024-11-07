import { Lang } from "src/types/lang.type";

export type NlbResponse<T, Data extends string> = Record<Data, T[]>;

export interface NlbRoute {
  overnightRoute: number; // is over night = 1, else 0
  routeId: string;
  routeName_c: string;
  routeName_e: string;
  routeName_s: string;
  routeNo: string;
  specialRoute: number; // is special = 1, else 0
}

export interface NlbStop {
  stopId: string;
  stopName_c: string;
  stopName_s: string;
  stopName_e: string;
  stopLocation_c: string;
  stopLocation_s: string;
  stopLocation_e: string;
  latitude: string;
  longitude: string;
  fare: string;
  fareHoliday: string;
  someDepartureObserveOnly: number;
}

export interface NlbEta {
  estimatedArrivalTime: string;
  routeVariantName: string;
  departed: number; // is departed from the first stop = 1, else 0
  noGPS: number; // gps installed = 1, else 0
  wheelChair: number; // can accessed by wheel chair = 1, else 0
  generateTime: string;
}

export interface NlbEtaRequest {
  routeId: string;
  stopId: string;
  language: Lang;
}
