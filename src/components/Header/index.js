import { dispatch } from "../../redux";
import { BsMoonStars, BsSun } from "react-icons/bs"
import { useSelector } from "react-redux";

const Header = () => {

    const theme = useSelector((state) => state.LayoutControl.theme);
    const boards = useSelector((state) => state.DataControl.boards);


    return (
        <header className="flex items-center justify-between">
            <button
                className="border-2 border-teal-900 dark:text-fff bg-white inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white rounded-lg  focus:ring-4 focus:ring-blue-300"
                onClick={() => dispatch({ type: "TOGGLE_THEME" })}
            >
                {theme === "light" ? <BsSun /> : <BsMoonStars />}
            </button>
        </header>
    );
}

export default Header;