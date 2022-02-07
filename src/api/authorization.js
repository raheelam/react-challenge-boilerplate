import { saveTokenToLocalStorage } from "../shared/utils/authHelper";
import primer from "./axiosSetup";

export const login = (
  username = "primer.candidate@primer.test",
  password = "Candidate1234",
  grant_type = "password"
) => {
  const params = new URLSearchParams();
  params.append("username", username);
  params.append("password", password);
  params.append("grant_type", grant_type);
  return primer
    .post(`/auth/login`, params)
    .then((res) => {
      const accessToken = res.data.accessToken;
      saveTokenToLocalStorage(accessToken);
      return res.data;
    })
    .catch((err) => err);
};

export const checkAuthState = () => {
  return localStorage.primerAccessToken !== undefined;
};
