import {
   COMPANY_DELETE_FAIL,
   COMPANY_DELETE_REQUEST,
   COMPANY_DELETE_SUCCESS,
   COMPANY_DETAILS_FAIL,
   COMPANY_DETAILS_REQUEST,
   COMPANY_DETAILS_SUCCESS,
   COMPANY_LIST_FAIL,
   COMPANY_LIST_REQUEST,
   COMPANY_LIST_RESET,
   COMPANY_LIST_SUCCESS,
   COMPANY_LOGIN_FAIL,
   COMPANY_LOGIN_REQUEST,
   COMPANY_LOGIN_SUCCESS,
   COMPANY_LOGOUT,
   COMPANY_PROFILE_FAIL,
   COMPANY_PROFILE_REQUEST,
   COMPANY_PROFILE_SUCCESS,
   COMPANY_REGISTER_FAIL,
   COMPANY_REGISTER_REQUEST,
   COMPANY_REGISTER_SUCCESS,
   COMPANY_UPDATE_PROFILE_FAIL,
   COMPANY_UPDATE_PROFILE_REQUEST,
   COMPANY_UPDATE_PROFILE_RESET,
   COMPANY_UPDATE_PROFILE_SUCCESS,
  } from "../constants/companyConstants";
  
  export const companyLoginReducer = (state = {}, action) => {
    switch (action.type) {
      case COMPANY_LOGIN_REQUEST:
        return { loading: true };
      case COMPANY_LOGIN_SUCCESS:
        return { loading: false, companyInfo: action.payload };
      case COMPANY_LOGIN_FAIL:
        return { loading: false, companyError: action.payload };
      case COMPANY_LOGOUT:
        return {};
      default:
        return state;
    }
  };
  
  export const companyRegisterReducer = (state = {}, action) => {
    switch (action.type) {
      case COMPANY_REGISTER_REQUEST:
        return { loading: true };
      case COMPANY_REGISTER_SUCCESS:
        return { loading: false, companyInfo: action.payload };
      case COMPANY_REGISTER_FAIL:
        return { loading: false, companyError: action.payload };
      case COMPANY_LOGOUT:
        return {};
      default:
        return state;
    }
  };
  
  export const companyDetailReducer = (state = { company: {} }, action) => {
    switch (action.type) {
      case COMPANY_DETAILS_REQUEST:
        return { loading: true };
      case COMPANY_DETAILS_SUCCESS:
        return { loading: false, company: action.payload };
      case COMPANY_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export const companiesListReducer = (state = { companies: [] }, action) => {
    switch (action.type) {
      case COMPANY_LIST_REQUEST:
        return { companiesListLoading: true };
      case COMPANY_LIST_SUCCESS:
        return { companiesListLoading: false, companies: action.payload };
      case COMPANY_LIST_FAIL:
        return { companiesListLoading: false, companiesListError: action.payload };
      case COMPANY_LIST_RESET:
        return { companies: [] };
      default:
        return state;
    }
  };
  
  export const companyProfileReducer = (
    state = { companyProfiler: {} },
    action
  ) => {
    switch (action.type) {
      case COMPANY_PROFILE_REQUEST:
        return { loading: true };
      case COMPANY_PROFILE_SUCCESS:
        return { loading: false, companyProfiler: action.payload };
      case COMPANY_PROFILE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export const companyUpdateProfileReducer = (state = {}, action) => {
    switch (action.type) {
      case COMPANY_UPDATE_PROFILE_REQUEST:
        return { loading: true };
      case COMPANY_UPDATE_PROFILE_SUCCESS:
        return { loading: false, success: true, companyInfo: action.payload };
      case COMPANY_UPDATE_PROFILE_FAIL:
        return { loading: false, error: action.payload };
      case COMPANY_UPDATE_PROFILE_RESET:
        return { state: {} };
      default:
        return state;
    }
  };
  
  export const companyDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case COMPANY_DELETE_REQUEST:
        return { loading: true };
      case COMPANY_DELETE_SUCCESS:
        return { loading: false, success: true };
      case COMPANY_DELETE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  