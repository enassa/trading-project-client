import { Business, Dashboard, Logout } from "@mui/icons-material";
import { ROUTES } from "../../../../constants/route-links";
import Portfolio from "../../../../pages/portfolio/Portfolio";

export const SideBarData = [
  {
    title: "Dahsboard",
    url: ROUTES.dashboard.url,
    icon: <Dashboard />,
    group: 1,
  },
  {
    title: "Portfolio",
    url: ROUTES.portfolio.url,
    icon: <Business />,
    group: 1,
  },
  {
    title: "Logout",
    url: ROUTES.portfolio.url,
    icon: <Logout />,
    group: 2,
  },
];
