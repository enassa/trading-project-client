import React from "react";
import { useState } from "react";
import { END_POINTS } from "../../constants/urls";

const OrderContext = React.createContext();
export const OrderProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [authResponse, setOrderReponse] = useState();

  const processSuccessOrder = (jwtToken) => {
    fetch(`${process.env.REACT_APP_BASE_URL}/api/v1/home`, {
      headers: {
        Orderorization: `Bearer ${jwtToken}`,
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => response.json())
      .then((data) => {})
      .catch((err) => console.error(err));
  };

  const processFailedOrder = (error) => {
    console.log(error);
    if ((error = "unknown")) {
      setOrderReponse({
        error: error,
        message: "Uknown error, check your internet connnection",
        ok: false,
        success: false,
      });
      return;
    }

    setOrderReponse({
      error: error,
      message: "Uknown error, check your internet connnection",
      ok: false,
      success: false,
    });
  };

  const request = async (path, method = "GET", data, token, action) => {
    setLoading(true);
    let url = `${process.env.REACT_APP_BASE_URL}${path}`;
    return fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: method !== "GET" && !!data ? JSON.stringify(data) : undefined,
    })
      .then(async (response) => {
        // console.log(response);
        if (response.ok) {
          const responseData = await response.text();
          return responseData === "Invalid Credentials"
            ? processFailedOrder("password", "login")
            : processSuccessOrder(responseData);
        } else {
          response?.status === 500 && processFailedOrder("email");
        }
      })
      .catch((error) => {
        processFailedOrder("unknown");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const getAllOrders = async (portfolioId) => {
    return request(`${END_POINTS.getAllOrders}`, "POST", portfolioId, "auth");
  };

  const getOneOrder = async (portfolioId) => {
    return request(
      `${END_POINTS.getOneOrder(portfolioId)}`,
      "POST",
      portfolioId,
      "auth"
    );
  };

  const createOrder = async (portfolioId) => {
    return request(
      `${END_POINTS.createOrder(portfolioId)}`,
      "POST",
      portfolioId,
      "auth"
    );
  };

  const updateOrder = async (portfolioId) => {
    return request(`${END_POINTS.updateOrder}`, "POST", portfolioId, "auth");
  };

  const cancelOrder = async (portfolioId) => {
    return request(
      `${END_POINTS.cancelOrder(portfolioId)}`,
      "POST",
      portfolioId,
      "auth"
    );
  };

  return (
    <OrderContext.Provider
      value={{
        getAllOrders,
        getOneOrder,
        updateOrder,
        createOrder,
        cancelOrder,
        loading,
        authResponse,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
export const useOrderServices = () => React.useContext(OrderContext);
