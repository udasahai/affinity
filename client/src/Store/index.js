import { createStore } from "redux"
import reducer from "../Reducers";

const initialState = {
    username: "",
    firstName: "",
    lastName: "",
    email: ""
};

export const store = createStore(reducer, initialState);
