export const END_POINTS = {
  // AUTH
  login: "/api/v1/auth/login",
  register: "/api/v1/auth/login",

  // ORDER
  getAllOrders: "/api/v1/order",
  updateOrder: "/api/v1/order",
  createOrder: (portfolioId) => `/api/v1/order/${portfolioId}`,
  getOneOrder: (orderId) => `/api/v1/order/${orderId}`,
  cancelOrder: (orderId) => `/api/v1/order/${orderId}`,

  // PORTFOLIO
  getAllPortfolio: "/api/v1/portfolio",
  createPortfolio: "/api/v1/portfolio",
  getStocksForPortfolio: (portfolioId) => `/api/v1/portfolio/${portfolioId}`,
  addStockToPortfolio: (portfolioId) => `/api/v1/portfolio/${portfolioId}`,
  closePortfolio: (portfolioId) => `/api/v1/portfolio/${portfolioId}`,
};
