//import axios from "axios";
import axios from "../../http";


import {
  COMPANY_LOGIN_REQUEST,
  COMPANY_LOGIN_SUCCESS,
  COMPANY_LOGIN_FAIL,
  COMPANY_DETAILS_SUCCESS,
  COMPANY_DETAILS_FAIL,
  COMPANY_DETAILS_REQUEST,
  COMPANY_LOGOUT,
  COMPANY_REGISTER_REQUEST,
  COMPANY_REGISTER_SUCCESS,
  COMPANY_REGISTER_FAIL,
  COMPANY_LIST_REQUEST,
  COMPANY_LIST_SUCCESS,
  COMPANY_LIST_FAIL,
  COMPANY_PROFILE_REQUEST,
  COMPANY_PROFILE_SUCCESS,
  COMPANY_PROFILE_FAIL,
  COMPANY_UPDATE_PROFILE_REQUEST,
  COMPANY_UPDATE_PROFILE_SUCCESS,
  COMPANY_UPDATE_PROFILE_FAIL,
  COMPANY_DELETE_REQUEST,
  COMPANY_DELETE_SUCCESS,
  COMPANY_DELETE_FAIL,
} from "../constants/companyConstants";

export const loginCompany = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: COMPANY_LOGIN_REQUEST,
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
      type: COMPANY_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("CompanyInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: COMPANY_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logoutCompany = () => (dispatch) => {
  localStorage.removeItem("CompanyInfo");
  dispatch({ type: COMPANY_LOGOUT });

  document.location.href = "/login";
};

export const registerCompany = (name,ice,logo,email,adress,phone) => async (dispatch) => {
  try {
    dispatch({
      type: COMPANY_REGISTER_REQUEST,
    });

    const config = {
      headers: {
        //"Content-Type": "application/json",
        "Content-Type": "multipart/form-data",
      },
    };

    const { data } = await axios.post(
      "/api/companies/create",
      {
        name,
        ice,
        logo,
        adress,
        phone,
        email,
        
        
      },
      config
    );

    dispatch({
      type: COMPANY_REGISTER_SUCCESS,
      payload: data,
    });

    localStorage.setItem("CompanyInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: COMPANY_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const registerCompanyy = (companyData) => async (dispatch) => {
  try {
    dispatch({
      type: COMPANY_REGISTER_REQUEST,
    });

    const config = {
      headers: {
        //"Content-Type": "application/json",
        "Content-Type": "multipart/form-data",
      },
    };

    const { data } = await axios.post( "api/companies/create",companyData,
      config
    );

    dispatch({
      type: COMPANY_REGISTER_SUCCESS,
      payload: data,
    });

    localStorage.setItem("CompanyInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: COMPANY_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const ListCompanyDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: COMPANY_DETAILS_REQUEST,
    });
    const {
      CompanyLogin: { CompanyInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${CompanyInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/v1/COMPANYs/${id}`, config);

    dispatch({
      type: COMPANY_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logoutCompany());
    }
    dispatch({
      type: COMPANY_DETAILS_FAIL,
      payload: message,
    });
  }
};

export const listCompanies = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: COMPANY_LIST_REQUEST,
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
      type: COMPANY_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logoutCompany());
    }
    dispatch({
      type: COMPANY_LIST_FAIL,
      payload: message,
    });
  }
};
export const listAllCompanies = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: COMPANY_LIST_REQUEST,
    });

   

    const { data } = await axios.get("api/companies/getAllCompanies");

    dispatch({
      type: COMPANY_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    
    dispatch({
      type: COMPANY_LIST_FAIL,
      payload: message,
    });
  }
};

export const getCompanyProfile = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: COMPANY_PROFILE_REQUEST,
    });
    const {
      companyLogin: { companyInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${companyInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/v1/companies/profile/${id}`);

    dispatch({
      type: COMPANY_PROFILE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logoutCompany());
    }
    dispatch({
      type: COMPANY_PROFILE_FAIL,
      payload: message,
    });
  }
};

export const UpdateCompanyProfile =
  (id, company) => async (dispatch, getState) => {
    try {
      dispatch({
        type: COMPANY_UPDATE_PROFILE_REQUEST,
      });

      const {
        COMPANYLogin: { companyInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${companyInfo.token}`,
        },
      };

      const { data } = await axios.put(
        `/api/v1/COMPANYs/${id}`,
        company,
        config
      );

      dispatch({
        type: COMPANY_UPDATE_PROFILE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized, token failed") {
        dispatch(logoutCompany());
      }
      dispatch({
        type: COMPANY_UPDATE_PROFILE_FAIL,
        payload: message,
      });
    }
  };

export const deleteCompany = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: COMPANY_DELETE_REQUEST,
    });

    const {
      adminLogin: { adminInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${adminInfo.token}`,
      },
    };

    await axios.delete(`/api/v1/COMPANYs/${id}`, config);

    dispatch({ type: COMPANY_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logoutCompany());
    }
    dispatch({
      type: COMPANY_DELETE_FAIL,
      payload: message,
    });
  }
};
