import { useDispatch } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducer from "./ReducerFragments/combiner";

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export const dispatch = store.dispatch;

export default store;

// store - omborxona, qiymatlar saqlanadigan joy, bank - katta bir obyekt
// const store = {
//   layout: {
//     openDrawer: false,
//     theme: "light",
//   },
//   user: { login: "", img: "", token: "" },
//   category: [],
//   products: [],
// };

// reducer - qora ishchi, togridan togri store bilan ishlaydi omborxonachi

// dispatch - funksiyalar toplamidan foydalanish, buyruq, pult
