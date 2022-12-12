import { useDispatch, useSelector } from "react-redux";
import { END_POINTS } from "./../../../../constants/urls";
import { API } from "./../../../../App";
import { getAsObjectFromLocalStorage } from "../../../../constants/reusable-functions";
import { setUpUser } from "./auth-slice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "./../../../../constants/route-links";
import { saveObjectInLocalStorage } from "./../../../../constants/reusable-functions";
import { useModal } from "../../../../components/modal/modal-context";

export const useAuthService = () => {
  const userData = useSelector((state) => state?.authSlice?.userData);
  const { showModal } = useModal();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loadingAuth, setLoading] = useState(false);
  const [authResponse, setAuthResponse] = useState();

  const userIsLoggedIn = () => {
    if (!!userData) return true;
    const localUserData = getAsObjectFromLocalStorage("tfx3213UserData");
    !!localUserData && dispatch(setUpUser(localUserData));
    !!localUserData && API.setToken(localUserData.token);
    return !!localUserData;
  };

  const processSuccessAuth = (jwtToken) => {
    API.setToken(jwtToken);
    API.GET_WITH_TOKEN(END_POINTS.home)
      .then((response) => {
        if (response?.status === 500) return processFailedAuth("email");
        if (response?.ok === false) return processFailedAuth("unknown");
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

  const processFailedAuth = (error) => {
    if ((error = "unknown")) {
      setAuthResponse({
        error: error,
        message: "Uknown error, check your internet connnection",
        ok: false,
        success: false,
      });
      return;
    }
    setAuthResponse({
      error: error,
      message: "Uknown error, check your internet connnection",
      ok: false,
      success: false,
    });
  };

  const loginAsync = async (data) => {
    setLoading(true);
    return API.POST(END_POINTS.login, data, "text")
      .then(async (response) => {
        if (response?.status === 500) return processFailedAuth("email");
        if (response?.ok === false) return processFailedAuth("unknown");

        return response === "Invalid Credentials"
          ? processFailedAuth("password", "login")
          : processSuccessAuth(response);
      })
      .catch((error) => {
        processFailedAuth("unknown");
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
        if (response?.ok === false) return processFailedAuth("unknown");
        setAuthResponse({
          message: "Registeration was succesfull",
          ok: true,
          success: true,
        });
      })
      .catch((error) => {
        processFailedAuth("unknown");
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
