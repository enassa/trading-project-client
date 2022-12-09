import React from "react";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { END_POINTS } from "../../constants/urls";
import { useJwt, decodeToken } from "react-jwt";
import { saveObjectInLocalStorage } from "./../../constants/reusable-functions";

const AuthContext = React.createContext();
export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [authResponse, setAuthReponse] = useState();

  const processSuccessAuth = (jwtToken) => {
    fetch(`${process.env.REACT_APP_BASE_URL}/api/v1/home`, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => response.json())
      .then((data) => {})
      .catch((err) => console.error(err));
    // saveObjectInLocalStorage({});
  };

  const processFailedAuth = (error) => {
    console.log(error);
    if ((error = "unknown")) {
      setAuthReponse({
        error: error,
        message: "Uknown error, check your internet connnection",
        ok: false,
        success: false,
      });
      return;
    }

    setAuthReponse({
      error: error,
      message: "Uknown error, check your internet connnection",
      ok: false,
      success: false,
    });
  };

  const request = async (path, method = "GET", data, token, action) => {
    let url = `${process.env.REACT_APP_BASE_URL}${path}`;
    setLoading(true);

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
            ? processFailedAuth("password", "login")
            : processSuccessAuth(responseData);
        } else {
          response?.status === 500 && processFailedAuth("email");
        }
      })
      .catch((error) => {
        processFailedAuth("unknown");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const loginUser = async (data) => {
    return request(`${END_POINTS.login}`, "POST", data, "auth");
  };
  const registerUser = async (data) => {
    console.log(data);
    return request(`${END_POINTS.register}`, "POST", data, "auth");
  };

  const logOut = (data) => {};
  return (
    <AuthContext.Provider
      value={{ logOut, loginUser, registerUser, loading, authResponse }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuthServices = () => React.useContext(AuthContext);
