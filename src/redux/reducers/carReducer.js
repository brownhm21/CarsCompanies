import {
    CAR_DELETE_FAIL,
    CAR_DELETE_REQUEST,
    CAR_DELETE_SUCCESS,
    CAR_DETAILS_FAIL,
    CAR_DETAILS_REQUEST,
    CAR_DETAILS_SUCCESS,
    CAR_LIST_FAIL,
    CAR_LIST_REQUEST,
    CAR_LIST_RESET,
    CAR_LIST_SUCCESS,
    CAR_LOGIN_FAIL,
    CAR_LOGIN_REQUEST,
    CAR_LOGIN_SUCCESS,
    CAR_LOGOUT,
    CAR_PROFILE_FAIL,
    CAR_PROFILE_REQUEST,
    CAR_PROFILE_SUCCESS,
    CAR_REGISTER_FAIL,
    CAR_REGISTER_REQUEST,
    CAR_REGISTER_SUCCESS,
    CAR_UPDATE_PROFILE_FAIL,
    CAR_UPDATE_PROFILE_REQUEST,
    CAR_UPDATE_PROFILE_RESET,
    CAR_UPDATE_PROFILE_SUCCESS,
   } from "../constants/carsConstants";
   
   export const carLoginReducer = (state = {}, action) => {
     switch (action.type) {
       case CAR_LOGIN_REQUEST:
         return { loading: true };
       case CAR_LOGIN_SUCCESS:
         return { loading: false, carInfo: action.payload };
       case CAR_LOGIN_FAIL:
         return { loading: false, carError: action.payload };
       case CAR_LOGOUT:
         return {};
       default:
         return state;
     }
   };
   
   export const carRegisterReducer = (state = {}, action) => {
     switch (action.type) {
       case CAR_REGISTER_REQUEST:
         return { loading: true };
       case CAR_REGISTER_SUCCESS:
         return { loading: false, carInfo: action.payload };
       case CAR_REGISTER_FAIL:
         return { loading: false, carError: action.payload };
       case CAR_LOGOUT:
         return {};
       default:
         return state;
     }
   };
   
   export const carDetailReducer = (state = { car: {} }, action) => {
     switch (action.type) {
       case CAR_DETAILS_REQUEST:
         return { loading: true };
       case CAR_DETAILS_SUCCESS:
         return { loading: false, car: action.payload };
       case CAR_DETAILS_FAIL:
         return { loading: false, error: action.payload };
       default:
         return state;
     }
   };
   
   export const carsListReducer = (state = { cars: [] }, action) => {
     switch (action.type) {
       case CAR_LIST_REQUEST:
         return { carsListLoading: true };
       case CAR_LIST_SUCCESS:
         return { carsListLoading: false, cars: action.payload };
       case CAR_LIST_FAIL:
         return { carsListLoading: false, carsListError: action.payload };
       case CAR_LIST_RESET:
         return { cars: [] };
       default:
         return state;
     }
   };
   
   export const carProfileReducer = (
     state = { carProfiler: {} },
     action
   ) => {
     switch (action.type) {
       case CAR_PROFILE_REQUEST:
         return { loading: true };
       case CAR_PROFILE_SUCCESS:
         return { loading: false, carProfiler: action.payload };
       case CAR_PROFILE_FAIL:
         return { loading: false, error: action.payload };
       default:
         return state;
     }
   };
   
   export const carUpdateProfileReducer = (state = {}, action) => {
     switch (action.type) {
       case CAR_UPDATE_PROFILE_REQUEST:
         return { loading: true };
       case CAR_UPDATE_PROFILE_SUCCESS:
         return { loading: false, success: true, carInfo: action.payload };
       case CAR_UPDATE_PROFILE_FAIL:
         return { loading: false, error: action.payload };
       case CAR_UPDATE_PROFILE_RESET:
         return { state: {} };
       default:
         return state;
     }
   };
   
   export const carDeleteReducer = (state = {}, action) => {
     switch (action.type) {
       case CAR_DELETE_REQUEST:
         return { loading: true };
       case CAR_DELETE_SUCCESS:
         return { loading: false, success: true };
       case CAR_DELETE_FAIL:
         return { loading: false, error: action.payload };
       default:
         return state;
     }
   };
   