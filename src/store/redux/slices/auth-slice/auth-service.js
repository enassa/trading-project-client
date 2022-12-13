import { useDispatch, useSelector } from "react-redux";
import { END_POINTS } from "./../../../../constants/urls";
import { API } from "./../../../../App";
import { getAsObjectFromLocalStorage } from "../../../../constants/reusable-functions";
import { setAuthResponse, setUpUser } from "./auth-slice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "./../../../../constants/route-links";
import { saveObjectInLocalStorage } from "./../../../../constants/reusable-functions";
import { useModal } from "../../../../components/modal/modal-context";

export const useAuthService = () => {
  const userData = useSelector((state) => state?.authSlice?.userData);
  const authResponse = useSelector((state) => state?.authSlice?.authResponse);

  const { showModal } = useModal();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loadingAuth, setLoading] = useState(false);

  const userIsLoggedIn = () => {
    if (!!userData) return true;
    const localUserData = getAsObjectFromLocalStorage("tfx3213UserData");
    !!localUserData && dispatch(setUpUser(localUserData));
    !!localUserData && API.setToken(localUserData.token);
    return false;
  };

  const processSuccessAuth = (jwtToken, page) => {
    API.setToken(jwtToken);
    API.GET_WITH_TOKEN(END_POINTS.home)
      .then((response) => {
        if (response?.status === 500) return processFailedAuth("email", page);
        if (response?.ok === false) return processFailedAuth("unknown", page);
        saveObjectInLocalStorage("tfx3213UserData", {
          token: jwtToken,
          ...response,
        });
        dispatch(
          setUpUser({
            token: jwtToken,
            ...response,
          })
        );
        API.setToken(jwtToken);
        navigate(ROUTES.dashboard.url);
      })
      .catch((err) => console.error(err))
      .finally(() => {
        setLoading(false);
      });
  };

  const processFailedAuth = (error, page) => {
    setLoading(false);
    if ((error = "unknown")) {
      dispatch(
        setAuthResponse({
          error: error,
          message: "Uknown error, check your internet connnection",
          ok: false,
          success: false,
          page,
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
        page,
      })
    );
  };

  const loginAsync = async (data) => {
    setLoading(true);
    return API.POST(END_POINTS.login, data, "text")
      .then(async (response) => {
        console.log(response);
        if (response?.status === 500)
          return processFailedAuth("email", "login");
        if (response?.ok === false)
          return processFailedAuth("unknown", "login");
        alert("i have been called");

        if (response === "Invalid Credentials")
          return processFailedAuth("password", "login");
        if (response === "") return processSuccessAuth(response, "login");
      })
      .catch((error) => {
        processFailedAuth("unknown", "register");
      })
      .finally(() => {});
  };

  const registerAsync = async (data) => {
    setLoading(true);
    return API.POST(END_POINTS.register, {
      firstName: data.first_name,
      lastName: data.last_name,
      email: data.email,
      password: data.password,
    })
      .then(async (response) => {
        if (response?.ok === false)
          return processFailedAuth("unknown", "register");
        setAuthResponse({
          message: "Registeration was succesfull",
          ok: true,
          success: true,
        });
      })
      .catch((error) => {
        processFailedAuth("unknown", "register");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const logOut = (data) => {
    showModal("Do you really want to logout?", (response) => {
      if (response) {
        localStorage.removeItem("tfx3213UserData");
        dispatch(setUpUser(undefined));
        navigate(ROUTES.base.url);
      }
    });
  };
  return {
    logOut,
    loginAsync,
    registerAsync,
    userIsLoggedIn,
    loadingAuth,
    authResponse,
    userData,
  };
};
