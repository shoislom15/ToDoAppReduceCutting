import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


import "../../App.css";
import List from "../../components/List";
import Header from "../../components/Header";
import { BsPlusLg } from "react-icons/bs";

export default function TodoApp() {
  const layout = useSelector((state) => state.LayoutControl);

  const [listTitle, setListTitle] = useState("");

  const lists = useSelector((state) => state.DataControl.lists);

  console.log(lists);

  const dispatch = useDispatch();

  const addList = () => {
    dispatch({ type: "ADD_LIST", payload: { listTitle } });
    setListTitle("")
  }


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

      <h1 className="text-3xl text-left mt-6 font-medium dark:text-fff">Board</h1>

      <div className="flex flex-wrap sm:flex-nowrap justify-start overflow-x-auto scroll">
        {
          lists.map((list, il) => {

            return (
              <List list={list} addTask={addTask} i={il} />
            )
          })
        }
      </div>
      <div className="max-w-full w-80  mt-5 rounded-xl border p-3" style={{ backgroundColor: "#F3F7F8" }}>
        <div className="flex flex-1 items-center rounded-md px-2" style={{ backgroundColor: "#E8F1F1" }}>
          <input
            className="border-0 flex-1 w-full rounded-lg px-3 py-2  mr-2 outline-none bg-transparent transition-all"
            type="text"
            value={listTitle}
            placeholder="New List here"
            onChange={(e) => setListTitle(e.target.value)}
          />
          <button className="py-1 px-4 rounded-md bg-plus text-fff" onClick={() => addList()}><BsPlusLg /></button>
        </div>
      </div>
    </div>
  );
}
