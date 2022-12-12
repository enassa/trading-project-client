import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import PageWrapper from "../../components/page-wrapper/PageWrapper";
import { useAuthService } from "../../store/redux/slices/auth-slice/auth-service";

export default function Home({ children }) {
  const { userIsLoggedIn } = useAuthService();

  return !userIsLoggedIn() ? (
    <PageWrapper>
      <Outlet />
    </PageWrapper>
  ) : (
    <Navigate to="/" />
  );
}
