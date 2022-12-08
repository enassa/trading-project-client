import React, { useEffect } from "react";
import { useState } from "react";
import { saveObjectInLocalStorage } from "../../../contants/libraries/easy";
import { errorToast } from "../../../components/toast/toastify";
import { END_POINTS } from "../../constants/urls";

export const useAuthServices = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState();
  const [authOrganizationCode, setAuthOrganizationCode] = useState();
  const [isLoggedIn, setLoginStatus] = useState(false);

  const initiateLogin = async () => {
    let userData = localStorage.getItem("userData");
    if (!!userData) {
      setLoginStatus(true);
      setUser(userData);
      return true;
    } else {
      setLoginStatus(false);
      return false;
    }
  };

  useEffect(() => {
    initiateLogin();
  });

  const processAuthentication = (data) => {
    setLoginStatus(true);
    setUser(data);
    saveObjectInLocalStorage("userData", data);
    return data;
  };

  const request = async (path, method = "GET", data, token, action) => {
    let url = `${process.env.REACT_APP_BASE_URL}${path}`;
    setLoading(true);
    return fetch(url, {
      method,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: method !== "GET" && !!data ? JSON.stringify(data) : undefined,
    })
      .then(async (response) => {
        // console.log(response);
        const responseData = await response?.json();
        if (response.ok) {
          if (responseData.success === true) {
            if (action === "auth") {
              return processAuthentication(responseData);
            } else {
              return responseData.data;
            }
          } else {
            return responseData;
          }
        } else {
          errorToast("Uknown error, Please contact administrator");
          return responseData;
        }
      })
      .catch((error) => {
        console.log(error);
        return {
          error: error,
          message: "Uknown error, check your internet connnection",
          ok: false,
          success: false,
        };
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
    return request(`${END_POINTS.registerOrganization}`, "POST", data, "auth");
  };

  const logOut = (data) => {
    setLoginStatus(false);
    setUser("");
    window.location.assign("/");
    localStorage.removeItem("userData");
  };

  return {
    isLoggedIn,
    loading,
    user,
    logOut,
    loginUser,
    initiateLogin,
    registerUser,
    authOrganizationCode,
    setAuthOrganizationCode,
  };
};
