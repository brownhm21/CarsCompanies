import axios from "axios";
//import axios from "../../http";

import {
  CAR_LOGIN_REQUEST,
  CAR_LOGIN_SUCCESS,
  CAR_LOGIN_FAIL,
  CAR_DETAILS_SUCCESS,
  CAR_DETAILS_FAIL,
  CAR_DETAILS_REQUEST,
  CAR_LOGOUT,
  CAR_REGISTER_REQUEST,
  CAR_REGISTER_SUCCESS,
  CAR_REGISTER_FAIL,
  CAR_LIST_REQUEST,
  CAR_LIST_SUCCESS,
  CAR_LIST_FAIL,
  CAR_PROFILE_REQUEST,
  CAR_PROFILE_SUCCESS,
  CAR_PROFILE_FAIL,
  CAR_UPDATE_PROFILE_REQUEST,
  CAR_UPDATE_PROFILE_SUCCESS,
  CAR_UPDATE_PROFILE_FAIL,
  CAR_DELETE_REQUEST,
  CAR_DELETE_SUCCESS,
  CAR_DELETE_FAIL,
} from "../constants/carsConstants";
export const registerCarr =
  (brand, model, matricule, color, fuel, transmission, price, companyId) =>
  async (dispatch) => {
    try {
      dispatch({
        type: CAR_REGISTER_REQUEST,
      });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        "api/cars/create",
        {
          brand,
          model,
          matricule,
          color,
          fuel,
          transmission,
          price,
          companyId,
        },
        config
      );

      dispatch({
        type: CAR_REGISTER_SUCCESS,
        payload: data,
      });

      localStorage.setItem("CarInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: CAR_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
export const loginCar = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: CAR_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "api/v1/COMPANYs/login",
      { email, password },
      config
    );

    dispatch({
      type: CAR_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("CompanyInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: CAR_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logoutCar = () => (dispatch) => {
  localStorage.removeItem("CompanyInfo");
  dispatch({ type: CAR_LOGOUT });

  document.location.href = "/login";
};

export const registerCar = (carData) => async (dispatch) => {
  try {
    dispatch({
      type: CAR_REGISTER_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
        //"Content-Type": "multipart/form-data",
      },
    };

    const { data } = await axios.post("/api/cars/create", carData, config);

    dispatch({
      type: CAR_REGISTER_SUCCESS,
      payload: data,
    });

    localStorage.setItem("CarInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: CAR_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const registerCar1 =
  (brand, model, matricule, color, fuel, transmission, price, companyId) =>
  async (dispatch) => {
    try {
      dispatch({
        type: CAR_REGISTER_REQUEST,
      });

      const config = {
        headers: {
          //"Content-Type": "application/json",
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post(
        "/api/cars/create",
        {
          brand,
          model,
          matricule,
          color,
          fuel,
          transmission,
          price,
          companyId,
        },
        config
      );

      dispatch({
        type: CAR_REGISTER_SUCCESS,
        payload: data,
      });

      localStorage.setItem("carInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: CAR_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
export const ListCarDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CAR_DETAILS_REQUEST,
    });
    const {
      CarLogin: { CarInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${CarInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/v1/Cars/${id}`, config);

    dispatch({
      type: CAR_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logoutCar());
    }
    dispatch({
      type: CAR_DETAILS_FAIL,
      payload: message,
    });
  }
};

export const listCars = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: CAR_LIST_REQUEST,
    });

    const {
      adminLogin: { adminInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${adminInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/v1/Companies`, config);

    dispatch({
      type: CAR_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logoutCar());
    }
    dispatch({
      type: CAR_LIST_FAIL,
      payload: message,
    });
  }
};
export const GetCars = () => async (dispatch) => {
  try {
    dispatch({
      type: CAR_LIST_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
        //"Content-Type": "multipart/form-data",
      },
    };

    const { data } = await axios.get("api/cars/getAllCars", config);

    dispatch({
      type: CAR_LIST_SUCCESS,
      payload: data,
    });
    localStorage.setItem("CarsInfo", JSON.stringify(data));
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: CAR_LIST_FAIL,
      payload: message,
    });
  }
};

export const getCarProfile = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CAR_PROFILE_REQUEST,
    });
    const {
      carLogin: { carInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${carInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/v1/companies/profile/${id}`);

    dispatch({
      type: CAR_PROFILE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logoutCar());
    }
    dispatch({
      type: CAR_PROFILE_FAIL,
      payload: message,
    });
  }
};

export const UpdateCarProfile = (id, car) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CAR_UPDATE_PROFILE_REQUEST,
    });

    const {
      CarLogin: { carInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${carInfo.token}`,
      },
    };

    const { data } = await axios.put(`/api/v1/Cars/${id}`, car, config);

    dispatch({
      type: CAR_UPDATE_PROFILE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logoutCar());
    }
    dispatch({
      type: CAR_UPDATE_PROFILE_FAIL,
      payload: message,
    });
  }
};

export const deleteCar = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CAR_DELETE_REQUEST,
    });

    const {
      adminLogin: { adminInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${adminInfo.token}`,
      },
    };

    await axios.delete(`/api/v1/Cars/${id}`, config);

    dispatch({ type: CAR_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logoutCar());
    }
    dispatch({
      type: CAR_DELETE_FAIL,
      payload: message,
    });
  }
};
