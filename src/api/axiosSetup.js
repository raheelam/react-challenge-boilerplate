import axios from "axios";

const url = "https://dashboard.api.staging.core.primer.io";

export default axios.create({
  baseURL: url,
  headers: {
    Authorization:
      "Bearer " + (localStorage.getItem("primerAccessToken") || ""),
  },
});
