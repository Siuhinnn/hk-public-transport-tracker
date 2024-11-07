import { useQuery } from "@tanstack/react-query";
import nlbClient from "src/api/nlbClient";
import {
  NlbEta,
  NlbEtaRequest,
  NlbResponse,
  NlbRoute,
  NlbStop,
} from "src/types/nlbData.type";

const fetchNlbRoutes = async () =>
  await nlbClient.get<NlbResponse<NlbRoute, "routes">>("route.php?action=list");

export const useFetchNlbRoutes = () => {
  return useQuery({
    queryKey: ["nlbRoutes"],
    queryFn: async () => {
      const { data } = await fetchNlbRoutes();
      return data.routes;
    },
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: false,
    enabled: false,
  });
};

const fetchNlbStops = async (routeId: string) =>
  await nlbClient.get<NlbResponse<NlbStop, "stops">>(
    `stop.php?action=list&routeId=${routeId}`
  );

export const useFetchNlbStops = (routeId: string) => {
  return useQuery({
    queryKey: ["nlbStops", routeId],
    queryFn: async () => {
      const { data } = await fetchNlbStops(routeId);
      return data.stops;
    },
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: false,
    enabled: false,
  });
};

const fetchNlbEta = async (params: NlbEtaRequest) =>
  await nlbClient.get<NlbResponse<NlbEta, "estimatedArrivals">>(
    `stop.php?action=estimatedArrivals&routeId=${params.routeId}&stopId=${params.stopId}&language=${params.language}`
  );

export const useFetchNlbEta = (nlbEtaParams: NlbEtaRequest) => {
  return useQuery({
    queryKey: [
      "nlbEta",
      nlbEtaParams.routeId,
      nlbEtaParams.stopId,
      nlbEtaParams.language,
      nlbEtaParams,
    ],
    queryFn: async () => {
      const { data } = await fetchNlbEta({ ...nlbEtaParams });
      return data.estimatedArrivals;
    },
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: false,
    enabled: false,
  });
};
