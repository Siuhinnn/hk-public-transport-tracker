import { NLB_ENDPOINT } from "@/assets/constant";
import { creatAxiosClient } from "@/lib/axiosClient";

const nlbClient = creatAxiosClient(NLB_ENDPOINT);

export default nlbClient;
