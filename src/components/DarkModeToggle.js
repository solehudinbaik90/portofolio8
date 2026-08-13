import { useTheme } from 'next-themes';
import { FiMoon, FiSun } from 'react-icons/fi';

export default function DarkModeToggle({ isMobile = false }) {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <span
      onClick={toggleTheme}
      className={`bg-white w-[40px] hover:text-white h-[40px] rounded-full justify-center items-center text-black hover:bg-[#ef4060] transition-all duration-300 ease-in-out cursor-pointer ml-2 ${
        isMobile ? 'flex items-center lg:hidden' : 'hidden lg:flex'
      }`}
    >
      <FiMoon className="text-3xl dark-mode-light dark:hidden" />
      <FiSun className="text-2xl dark-mode-dark hidden fill-jacarta-700 group-hover:fill-white group-focus:fill-white dark:block dark:fill-white" />
    </span>
  );
}
