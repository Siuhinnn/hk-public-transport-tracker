import { NLB_ENDPOINT } from "src/assets/constant";
import { creatAxiosClient } from "src/lib/apiClient";

const nlbClient = creatAxiosClient(NLB_ENDPOINT);

export default nlbClient;
