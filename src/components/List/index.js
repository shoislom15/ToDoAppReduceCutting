import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { faCheck, faTimes, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { useDispatch } from "react-redux";
import Button from "../../components/Button";
import Task from "../Task";

const List = ({ list, addTask, i }) => {

    const [value, setValue] = useState("");

    const sett = (val) => {
        setValue(val);
    }

    return (
        <div className="max-w-full mr-2 w-full  mt-5 rounded-xl p-3" style={{ backgroundColor: "#F3F7F8", borderLeft: `3px solid black` }}>
            <p className="font-medium mb-2">{list.title}</p>
            <div className="flex flex-1 items-center rounded-md px-2" style={{ backgroundColor: "#E8F1F1" }}>
                <input
                    className="border-0 flex-1 rounded-lg px-3 py-2  mr-2 outline-none bg-transparent transition-all"
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <Button className="py-1 rounded-md bg-plus text-fff" onClick={() => addTask(i, value, sett)}><BsPlusLg /></Button>
            </div>
            <ul className="mt-4 overflow-hidden">
                {list.tasks.map((item, index) => (
                    <Task index={index} listId={i} value={item} />
                ))}
            </ul>
        </div>
    )
}

export default List;