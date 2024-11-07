import axios, { AxiosInstance } from "axios";

export const creatAxiosClient = (url: string): AxiosInstance => {
  const axiosInstance = axios.create({
    baseURL: url,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  // axiosInstance.interceptors.response.use(
  //   function (response) {
  //     return response;
  //   },
  //   function (error) {
  //     if (axios.isAxiosError(error)) {
  //       console.error(`Error: ${error?.message}`);
  //       console.error(`Status: ${error?.response?.status}`);

  //       if (
  //         error?.response?.status === 400 ||
  //         error?.response?.status === 500
  //       ) {
  //         return Promise.reject({ error: error?.response?.data?.message });
  //       }
  //     } else {
  //       // Handle non-Axios errors
  //       console.error("An unexpected error occurred:", error);
  //     }

  //     return Promise.reject({ error: "An error occurred" });
  //   }
  // );

  return axiosInstance;
};
