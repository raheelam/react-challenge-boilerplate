import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";

import primerLogo from "../assets/logo.png";
import { checkAuthState, login } from "../api/authorization";
import PaymentDetail, { CenteredDiv } from "../pages/paymentDetail";
import Transactions from "../pages/Transactions.js";

const AppRoutes = () => {
  const [authError, setAuthError] = useState(null);
  useEffect(() => {
    //extract this out
    if (!checkAuthState()) {
      (async () => {
        let res = await login();
        if (res.isAxiosError) {
          console.log(res.response.data.error.errorId);
          setAuthError(res.response.data.message);
          return;
        }
        window.location.href = "/";
      })();
    }
  }, []);
  return (
    <Routes>
      {checkAuthState() ? (
        <>
          <Route exact path="/" element={<Transactions />} />
          <Route exact path="/payments/:id" element={<PaymentDetail />} />
        </>
      ) : (
        <Route
          path="/*"
          element={
            <CenteredDiv>
              <img
                alt="primer logo"
                width="100px"
                height="100px"
                src={primerLogo}
              />
              <p style={{ fontSize: "5rem" }}> {authError || "Logged Out"}</p>
            </CenteredDiv>
          }
        />
      )}
    </Routes>
  );
};

export default AppRoutes;
