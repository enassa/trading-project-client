import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ROUTES } from "./constants/route-links";
import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import PageNotFound from "./components/page-not-found/page-not-found";
import Login from "./pages/auth/login/Login";
import LandingPage from "./pages/landing-page/LandingPage";
import Portfolio from "./pages/portfolio/Portfolio";
import TradeHistroyPage from "./pages/trade-history/TradeHistroyPage";
import Register from "./pages/auth/register/Register";
import { API_HANDLER } from "./util/api-handler";
import "react-toastify/dist/ReactToastify.css";
import PortfolioDetail from "./pages/portfolio/portfolio-detail/PortfolioDetail";
import PortfolioList from "./pages/portfolio/portfolio-list/PortfolioList";
export const API = new API_HANDLER(process.env.REACT_APP_BASE_URL);

function App() {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        {/*====== Non Protected routes ====== */}
        <Route path={ROUTES.base.route} element={<LandingPage />} />
        <Route path={ROUTES.login.route} element={<Login />} />
        <Route path={ROUTES.register.route} element={<Register />} />
        {/*====== Protected routes ======  */}
        <Route path={ROUTES.home.route} element={<Home />}>
          <Route path={ROUTES.dashboard.route} element={<Dashboard />} />
          <Route path={ROUTES.portfolio.route} element={<Portfolio />}>
            <Route
              path={ROUTES.tradeHistory.route}
              element={<TradeHistroyPage />}
            />
            <Route
              path={ROUTES.portfolioDetail.route}
              element={<PortfolioDetail />}
            />
            <Route
              path={ROUTES.portfolioList.route}
              element={<PortfolioList />}
            />
          </Route>

          <Route
            path={ROUTES.tradeHistory.route}
            element={<TradeHistroyPage />}
          />
        </Route>

        {/* ====== Non existant route ====== */}
        <Route path={ROUTES.notFound} element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
