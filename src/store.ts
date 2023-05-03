import { createStore } from "redux";
import reducer from "./reducers/table";

export const store = createStore(reducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
