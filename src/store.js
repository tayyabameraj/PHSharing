import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { eventListReducer } from "./reducers/eventReducer";
import { loginReducer, registerReducer } from "./reducers/userReducer";
import { tokenReducer } from "./reducers/tokenReducer";
import { modalReducer } from "./reducers/modalReducer";

const reducer = combineReducers({
  eventList: eventListReducer,
  login: loginReducer,
  token: tokenReducer,
  register: registerReducer,
  modals: modalReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
