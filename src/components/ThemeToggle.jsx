
import { useAppContext } from "../context"
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = () => {

  const {toggleDarkMode, darkMode} = useAppContext()

  return (
    <div className="flex justify-end w-full mb-10">
      <button onClick={toggleDarkMode} className="text-xl hover:text-blue-400 transition-colors">
        {darkMode ? <FaSun/> : <FaMoon/>}
      </button>
    </div>
  )
}
export default ThemeToggle