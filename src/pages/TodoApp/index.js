import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


import "../../App.css";
import List from "../../components/List";
import Header from "../../components/Header";

export default function TodoApp() {
  const layout = useSelector((state) => state.layout);

  const lists = useSelector((state) => state.lists);

  console.log(lists);

  const dispatch = useDispatch();


  const addTask = (i, value, callback) => {
    if (value.trim() == "") return;

    dispatch({
      type: "ADD_TASK",
      payload: {
        value: value,
        index: i,
      }
    });
    callback("");
  };

  useEffect(() => {
    if (layout.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [layout.theme]);

  return (
    <div className="min-h-screen p-10 mx-auto py-8 dark:bg-darkThemeColor">

      <Header theme={layout.theme} />

      <h1 className="text-3xl text-left mt-6 font-medium text-boardTitle">Board</h1>

      <div className="flex overflow-x-auto gap-4 scroll">
        {
          lists.map((list, il) => {

            return (
              <List list={list} addTask={addTask} i={il} />
            )
          })
        }
      </div>
    </div>
  );
}
