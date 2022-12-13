import { RemoveRedEye } from "@mui/icons-material";
import { Settings } from "@mui/icons-material";
import { AddCircle } from "@mui/icons-material";
import PortfolioStocks from "./portfolio-stocks/PortfolioStocks";
import OpenTrades from "./open-trades/OpenTrades";
import TradeHistory from "./trade-history/TradeHistory";

export const portfolioPages = [
  {
    title: "Portfolio list",
    icon: <RemoveRedEye className="text-white" style={{ fontSize: 30 }} />,
  },
  {
    title: "Portfolio settings",
    icon: <Settings className="text-white" style={{ fontSize: 30 }} />,
  },
  {
    title: "Create Portfolio",
    icon: <AddCircle className="text-white" style={{ fontSize: 30 }} />,
  },
];

export const tabs = [
  {
    title: "Stocks",
    url: "stocks",
    component: <PortfolioStocks />,
  },
  {
    title: "Open Trades",
    url: "open-trades",
    component: <OpenTrades />,
  },
  {
    title: "Trade History",
    url: "trade-history",
    component: <TradeHistory />,
  },
];
