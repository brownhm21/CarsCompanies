import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";




import { userLoginReducer,userRegisterReducer } from "./reducers/userReducer";
import { companyLoginReducer,companyRegisterReducer,companyDetailReducer, companiesListReducer,companyProfileReducer,companyUpdateProfileReducer,companyDeleteReducer } from "./reducers/companyReducer";
import { carLoginReducer,carRegisterReducer,carDetailReducer, carsListReducer,carProfileReducer,carUpdateProfileReducer,carDeleteReducer } from "./reducers/carReducer";

const reducer = combineReducers({
  
  userLogin:userLoginReducer,
  userRegister:userRegisterReducer,


  companyLogin:companyLoginReducer,
  companyRegister:companyRegisterReducer,
  companyDetail:companyDetailReducer,
  companiesList:companiesListReducer,
  companyProfile:companyProfileReducer,
  companyUpdateProfile:companyUpdateProfileReducer,
  companyDelete:companyDeleteReducer,

  carLogin:carLoginReducer,
  carRegister:carRegisterReducer,
  carDetail:carDetailReducer,
  carsList:carsListReducer,
  carProfile:carProfileReducer,
  carUpdateProfile:carUpdateProfileReducer,
  carDelete:carDeleteReducer,






 
});

const middleware = [thunk];


  const userInfofromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
  const companyInfofromLocalStorage = localStorage.getItem("CompanyInfo")
  ? JSON.parse(localStorage.getItem("CompanyInfo"))
  : null;
  const carInfofromLocalStorage = localStorage.getItem("CarInfo")
  ? JSON.parse(localStorage.getItem("CarInfo"))
  : null;


const initialeState = {
  
  userLogin: { userInfo: userInfofromLocalStorage },
  companyLogin: { companyInfo: companyInfofromLocalStorage },
  carLogin: { carInfo: carInfofromLocalStorage },
};

const store = createStore(
  reducer,
  initialeState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
