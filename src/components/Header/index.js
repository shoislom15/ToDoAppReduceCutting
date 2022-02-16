import { dispatch } from "../../redux";
import { BsMoonStars, BsSun } from "react-icons/bs"
import { useSelector } from "react-redux";

const Header = () => {

    const theme = useSelector((state) => state.layout.theme)

    return (
        <header>
            <button
                className="border-2 border-rose-400 inline-flex items-center text-customBorders py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => dispatch({ type: "TOGGLE_THEME" })}
            >

                {theme === "light" ? <BsSun className="text-customBorders" /> : <BsMoonStars />}
            </button>
        </header>
    );
}

export default Header;