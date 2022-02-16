import { useDispatch } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const initialState = {
  layout: {
    theme: "light",
  },
  lists: [
    {
      title: "List 01",
      tasks: [
        {
          title: "Task 01",
          completed: false,
        }
      ]
    },
    {
      title: "List 01",
      tasks: [
        {
          title: "Task 01",
          completed: false,
        }
      ]
    },
    {
      title: "List 01",
      tasks: [
        {
          title: "Task 01",
          completed: false,
        }
      ]
    },
    {
      title: "List 01",
      tasks: [
        {
          title: "Task 01",
          completed: false,
        }
      ]
    },
    {
      title: "List 01",
      tasks: [
        {
          title: "Task 01",
          completed: false,
        }
      ]
    },
    {
      title: "List 01",
      tasks: [
        {
          title: "Task 01",
          completed: false,
        }
      ]
    },
  ]
};

const reducer = (state = initialState, action) => {
  let oldTasks;

  let lists = [...state.lists];

  let s = JSON.parse(JSON.stringify(state));


  switch (action.type) {
    case "TOGGLE_THEME":

      s.layout.theme = s.layout.theme === "dark" ? "light" : "dark";
      return { ...s };

    case "ADD_TASK":

      s.lists[action.payload.index].tasks.push({ title: action.payload.value, completed: false })
      return { ...s };

    case "EDIT_TASK":

      console.log(action.payload.value);

      s.lists[action.payload.listId].tasks[action.payload.index].title = action.payload.value;
      return { ...s };

    case "REMOVE_TASK":
      lists = [...state.lists];
      console.log(action.payload.listId);
      console.log(action.payload.index);
      lists[action.payload.listId].tasks.splice(action.payload.index, 1);

      return {
        ...state,
        lists: [...lists],
      };
    default:
      return state;
  }
};

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
