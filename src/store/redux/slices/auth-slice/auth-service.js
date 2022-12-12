import { useDispatch, useSelector } from "react-redux";
import { END_POINTS } from "./../../../../constants/urls";
import { API } from "./../../../../App";
import { getAsObjectFromLocalStorage } from "../../../../constants/reusable-functions";
import { setAuthResponse, setUpUser } from "./auth-slice";
import { useState } from "react";

export const useAuthService = () => {
  const userData = useSelector((state) => state?.authSlice?.userData);
  const authResponse = useSelector((state) => state?.authSlice?.authResponse);

  const [loadingAuth, setLoading] = useState(false);
  const dispatch = useDispatch();

  const userIsLoggedIn = () => {
    const userData = getAsObjectFromLocalStorage("tfx3213UserData");
    console.log(userData);
    !!userData && dispatch(setUpUser(userData));
    !!userData && API.setToken(userData.token);
    return !!userData;
  };

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
  };

  const processFailedAuth = (error) => {
    console.log(error);
    if ((error = "unknown")) {
      dispatch(
        setAuthResponse({
          error: error,
          message: "Uknown error, check your internet connnection",
          ok: false,
          success: false,
        })
      );
      return;
    }
    dispatch(
      setAuthResponse({
        error: error,
        message: "Uknown error, check your internet connnection",
        ok: false,
        success: false,
      })
    );
  };

  const loginAsync = async (data) => {
    setLoading(true);
    return API.POST(END_POINTS.login, data)
      .then(async (response) => {
        console.log(response);
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

  const registerAsync = async (data) => {
    console.log(data);
    return API.POST(END_POINTS.register, data);
  };

  const logOut = (data) => {};
  return {
    loginAsync,
    registerAsync,
    userIsLoggedIn,
    loadingAuth,
    authResponse,
    userData,
  };
};
