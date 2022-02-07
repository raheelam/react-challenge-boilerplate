export const saveTokenToLocalStorage = (token) => {
  return localStorage.setItem("primerAccessToken", token);
};
