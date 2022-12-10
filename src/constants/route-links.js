const protectedBaseRoute = {
  route: "/home",
  url: "/home",
};

export const ROUTES = {
  // =============== BASE ROUTES ===============
  base: {
    route: "/",
    url: "/",
  },
  home: {
    route: protectedBaseRoute.route,
    url: protectedBaseRoute.url,
  },

  // =============== AUTH ROUTES ===============
  register: {
    route: "/register",
    url: "/register",
  },
  login: {
    route: "/login",
    url: "/login",
  },
  forgotPassword: {
    route: "/forgot-password",
    url: "/forgot-password",
  },
  resetPassword: {
    route: "/reset-password",
    url: "/reset-password",
  },
  logOut: {
    route: "/logout",
    url: "/",
  },

  //===============  PROTECTED ROUTES ===============
  dashboard: {
    route: "dashboard",
    url: protectedBaseRoute.url + "/dashboard",
  },
  portfolio: {
    route: "portfolio",
    url: protectedBaseRoute.url + "/portfolio",
  },
  tradeHistory: {
    route: "trade-history",
    url: protectedBaseRoute.url + "/trade-history",
  },
  notFound: "*",
};
