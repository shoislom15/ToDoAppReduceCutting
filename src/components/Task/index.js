import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { faCheck, faTimes, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../Button";


const Task = ({ index, listId, value, ...props }) => {
    const [isEdit, setEdit] = useState(false);
    const [text, setText] = useState(value.title);
    const refText = useRef();

    console.log(listId);

    const dispatch = useDispatch();

    const editTask = () => {

        console.log(index);
        console.log(listId);
        console.log(value);

        setEdit(false);
        dispatch({ type: "EDIT_TASK", payload: { index, listId, value: text } });
    };

    const removeTask = (index) => {
        dispatch({ type: "REMOVE_TASK", payload: { index, listId, text } });
    };

    useEffect(() => {
        isEdit && refText.current.focus();
    }, [isEdit]);

    return (
        <li
            key={index}
            className="px-3 py-2 border rounded-lg mb-3 shadow flex justify-between items-center"
            {...props}
        >
            {(isEdit && (
                <input
                    ref={refText}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="flex-1 p-1 mr-2 outline-none rounded-lg transition-all border-2 border-transparent focus:border-gray-300"
                />
            )) || <span>{value.title}</span>}
            <div>
                {isEdit ? (
                    <>
                        <Button className={"mr-2"} size={"sm"} onClick={() => editTask()}>
                            <FontAwesomeIcon icon={faCheck} />
                        </Button>
                        <Button
                            className={"mr-2"}
                            type="warning"
                            size={"sm"}
                            onClick={() => {
                                setEdit(false);
                                setText(value.title);
                            }}
                        >
                            <FontAwesomeIcon icon={faTimes} />
                        </Button>
                    </>
                ) : (
                    <Button
                        className={"mr-2"}
                        type="warning"
                        size={"sm"}
                        onClick={() => setEdit(true)}
                    >
                        <FontAwesomeIcon icon={faEdit} />
                    </Button>
                )}
                <Button
                    className={"mr-2"}
                    type="danger"
                    size={"sm"}
                    onClick={() => removeTask(index)}
                >
                    <FontAwesomeIcon icon={faTrash} />
                </Button>
            </div>
        </li>
    );
};

export default Task;