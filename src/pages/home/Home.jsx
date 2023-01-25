import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import PageWrapper from "../../components/page-wrapper/PageWrapper";
import { useAuthService } from "../../store/redux/slices/auth-slice/auth-service";
import { useExchangeDataService } from "./../../store/redux/slices/exchange-slice/exchange-service";
import { ModalProvider } from "./../../components/modal/modal-context";

export default function Home({ children }) {
  const { userIsLoggedIn } = useAuthService();
  const { getMarketDataAsync } = useExchangeDataService();
  useEffect(() => {
    getMarketDataAsync();
  }, []);
  return !userIsLoggedIn() ? (
    <ModalProvider>
      <PageWrapper>
        <Outlet />
      </PageWrapper>
    </ModalProvider>
  ) : (
    <Navigate to="/" />
  );
}
