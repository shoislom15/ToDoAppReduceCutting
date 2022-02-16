import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { faCheck, faTimes, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../../components/Button";
import Task from "../Task";

const List = ({ list, addTask, i }) => {

    const [value, setValue] = useState("");

    const sett = (val) => {
        setValue(val);
    }

    return (
        <div className="w-80 mx-auto mt-5">
            <div className="flex flex-1 items-center">
                <input
                    className="border-2 flex-1 rounded-lg px-3 py-2 shadow mr-2 outline-none focus:border-gray-600 transition-all"
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <Button onClick={() => addTask(i, value, sett)}>Add</Button>
            </div>
            <ul className="mt-4">
                {list.tasks.map((item, index) => (
                    <Task index={index} listId={i} value={item} />
                ))}
            </ul>
        </div>
    )
}

export default List;