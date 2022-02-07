import primer from "./axiosSetup";
import axios from "axios";
import { login } from "./authorization";

const generateQuery = (obj) => {
  return Object.keys(obj)
    .filter((key) => obj[key] !== "ALL" && obj[key])
    .map((key, index) => {
      if (index === 0) {
        return `?${key}=${obj[key]}`;
      } else {
        return `&${key}=${obj[key]}`;
      }
    });
};

let tokenSource;

export const getAllPayments = () => {
  return primer
    .get(`/payments`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err.response.data);
      if (checkIsAuthError(err)) return reAuthorize();
      return err;
    });
};

export const getFilteredPayments = (filters) => {
  if (typeof tokenSource !== typeof undefined) {
    tokenSource.cancel();
  }
  tokenSource = axios.CancelToken.source();
  const query = generateQuery(filters).join("");
  return primer
    .get(`/payments${query}`, { cancelToken: tokenSource.token })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      if (axios.isCancel(err)) return { cancelPrevQuery: true };
      if (checkIsAuthError(err)) return reAuthorize();
      return err;
    });
};

export const getPaymentDetail = (paymentId) => {
  return primer
    .get(`/payments/${paymentId}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      if (checkIsAuthError(err)) return reAuthorize();
      return err;
    });
};

export const reAuthorize = () => {
  localStorage.removeItem("primerAccessToken");
  return login().then(() => window.location.reload());
};

export const checkIsAuthError = (err) => {
  return (
    err.isAxiosError &&
    err.response.data.error.errorId === "InvalidAuthCredentials"
  );
};
