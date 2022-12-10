import React from "react";
import { Outlet } from "react-router-dom";
import PageWrapper from "../../components/page-wrapper/PageWrapper";
import { OrderProvider } from "./../../store/context/order-context";

export default function Home({ children }) {
  return (
    <OrderProvider>
      <PageWrapper>
        <Outlet />
      </PageWrapper>
    </OrderProvider>
  );
}
