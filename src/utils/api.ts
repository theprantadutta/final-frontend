import axios from "axios";
import { logout } from "./auth";
import { isServer, LARAVEL_URL } from "./constants";
import { useRouter } from "next/router";

export const laravelApi = (nonApiRoute = false) => {
  const api = axios.create({
    baseURL: `${LARAVEL_URL}${nonApiRoute ? "" : "/api"}`,
    withCredentials: true,
  });
  api.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error.response.status === 401) {
        await logout();
        if (!isServer) {
          const router = useRouter();
          return router.push("/login");
        }

        return Promise.reject({ status: 401, errors: ["Unauthorized"] });
      }

      if (error?.response?.status === 422) {
        let errors = Object?.values(error?.response?.data?.errors || {});

        return Promise?.reject({
          status: 422,
          errorsRaw: errors,
          errors: errors.reduce((error) => error),
        });
      }

      console.error(error);

      return Promise.reject({
        status: error?.response?.status,
        errors: ["Oops!"],
      });
    }
  );
  return api;
};
