import { creatAxiosClient } from "src/lib/apiClient";

const NLB_BASE_URL = "https://rt.data.gov.hk/v2/transport/nlb";
const axiosClient = creatAxiosClient(NLB_BASE_URL);

export const nlbHelper = {
  fetchAllRoutes: async () => {
    try {
      const result = await axiosClient.get("route.php?action=list");

      if (!result?.data) {
        throw new Error("Fail to fetch");
      }

      return result.data;
    } catch (e) {
      // if ('error' in e) {

      // }
      // if (e.response) {
      //   if (e.response.status === 400 || e.response.status === 500)
      //     return { error: e.response.data.message };
      // }
      return { error: e };
    }
  },
};

/*

https://rt.data.gov.hk/v2/transport/nlb/route.php?action=list

https://rt.data.gov.hk/v2/transport/nlb/stop.php?action=list&routeId={routeId}

https://rt.data.gov.hk/v2/transport/nlb/stop.php?action=estimatedArrivals&routeId={routeId}&stopId={stopId}&language={languageCode}

*/
