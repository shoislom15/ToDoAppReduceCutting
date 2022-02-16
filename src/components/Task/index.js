import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { faCheck, faTimes, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cleanup } from "@testing-library/react";
import { useEffect, useRef, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiPenTool } from "react-icons/fi";
import { useDispatch } from "react-redux";


const Task = ({ index, listId, value, ...props }) => {
    const [isEdit, setEdit] = useState(false);
    const [text, setText] = useState(value.title);
    const [time, setTime] = useState(false);
    const refText = useRef();

    console.log(index);

    const dispatch = useDispatch();

    const editTask = () => {

        console.log(index);
        console.log(listId);
        console.log(value);

        setEdit(false);
        dispatch({ type: "EDIT_TASK", payload: { index, listId, value: text } });
    };

    const removeTask = (index) => {
        setTimeout(() => { dispatch({ type: "REMOVE_TASK", payload: { index, listId, text } }); setTime(false) }, 1000)
        setTime(true)
    };

    useEffect(() => {
        isEdit && refText.current.focus();

        return () => {
            cleanup()
        }
    }, [isEdit]);

    return (
        <li
            // key={index}
            className={`px-3 py-2 rounded-md mb-3 flex justify-between items-center ${time && "transition2 transition1"} bg-fff `}
            {...props}
        >
            {(isEdit && (
                <input
                    ref={refText}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className={`flex-1 p-0 mr-3 outline-none h-14 rounded-lg  border-2 border-transparent focus:border-gray-300}}`}
                />
            )) || <span className="mr-3">{value.title}</span>}
            <div className="flex items-center">
                {isEdit ? (
                    <>
                        <button className={"mr-2 shadow-none"} size={"sm"} onClick={() => editTask()}>
                            <FontAwesomeIcon icon={faCheck} />
                        </button>
                        <button
                            className={"mr-2 shadow-none"}
                            type="warning"
                            size={"sm"}
                            onClick={() => {
                                setEdit(false);
                                setText(value.title);
                            }}
                        >
                            <FontAwesomeIcon icon={faTimes} />
                        </button>

                    </>
                ) : (
                    <>
                        <button
                            className={"mr-2 shadow-none"}
                            type="warning"
                            size={"sm"}
                            onClick={() => setEdit(true)}
                        >
                            <FiPenTool className="w-4 h-4" />
                        </button>
                        <button
                            className={"mr-2 p-1 shadow-none"}
                            type="danger"
                            size={"sm"}
                            onClick={() => removeTask(index)}
                        >
                            <FaRegTrashAlt className="h-4 w-4 m-0" />
                        </button>
                    </>

                )}
            </div>
        </li>
    );
};

export default Task;