import scam from "../../functions/scam";

const initialState = {
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

const DataControl = (state = initialState, action) => {
    let s = scam(state);


    switch (action.type) {
        case "ADD_TASK":

            s.lists[action.payload.index].tasks.push({ title: action.payload.value, completed: false })
            return { ...s };
        case "ADD_LIST":


            s.lists.push({ title: action.payload.listTitle, tasks: [] });
            return { ...s };

        case "EDIT_TASK":

            console.log(action.payload.value);

            s.lists[action.payload.listId].tasks[action.payload.index].title = action.payload.value;
            return { ...s };

        case "REMOVE_TASK":
            s.lists[action.payload.listId].tasks.splice(action.payload.index, 1);
            return { ...s };
        default:
            return state;
    }

};

export default DataControl;