import scam from "../../functions/scam";

const initialState = {
    layout: {
        theme: "light",
    },
}

const LayoutControl = (state = initialState, action) => {
    let s = scam(state);

    switch (action.type) {
        case "TOGGLE_THEME":

            s.theme = s.theme === "dark" ? "light" : "dark";
            return { ...s };

        default:
            return state;
    }
}

export default LayoutControl;