import React from "react";
import { Outlet } from "react-router-dom";
import PageWrapper from "../../components/page-wrapper/PageWrapper";

export default function Home({ children }) {
  return (
    <PageWrapper>
      <Outlet />
    </PageWrapper>
  );
}
