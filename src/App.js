import { Provider } from "react-redux";
import "./App.css";
import store from "./redux";
import TodoApp from "./pages/TodoApp";

function App() {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
}

export default App;
