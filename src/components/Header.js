import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { menuItems } from '@/data/menuData';
import DarkModeToggle from './DarkModeToggle';

const baseLinkClass =
  'rounded-md cursor-pointer font-poppins bg-white text-gray-lite font-medium mx-2.5 flex text-xtiny py-2.5 px-2 md:px-4 xl:px-5 items-center transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-[#212425] hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] dark:text-[#A6A6A6]';

const activeLinkClass = 'linked bg-gradient-to-r';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const isRouteActive = (routePath) => {
    return routePath.replace(/\/\d+/, '') === router.asPath.replace(/\/\d+/, '');
  };

  return (
    <div className="z-50">
      <div className="container">
        <header className="flex justify-between items-center fixed top-0 left-0 w-full lg:static z-[1111111111]">

          <div className="flex justify-between w-full px-4 lg:px-0 bg-[#F3F6F6] lg:bg-transparent dark:bg-black lg:dark:bg-transparent">
            <div className="flex justify-between w-full items-center space-x-4 lg:my-8 my-5">
              <Link href="/">
                <Image
                  className="h-[28px] lg:h-[32px]"
                  width={153}
                  height={26}
                  priority
                  src="/images/logo/logo.png"
                  alt="logo"
                />
              </Link>

              <div className="flex items-center">
                <DarkModeToggle isMobile={true} />

                <span
                  onClick={() => setMenuOpen(!menuOpen)}
                  className={`lg:opacity-0 lg:invisible visible opacity-100 bg-[#ef4060] w-[40px] h-[40px] rounded-full flex justify-center cursor-pointer items-center text-white dark:text-white text-3xl ml-3`}
                >
                  {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                </span>
              </div>
            </div>
          </div>

          <nav className={menuOpen ? 'block dark:bg-black' : 'hidden lg:block'}>
            <ul
              className={
                menuOpen
                  ? 'block lg:hidden absolute left-0 rounded-b-[20px] top-20 z-[22222222222222] w-full bg-white dark:bg-[#212425] drop-shadow-lg py-4'
                  : 'flex my-12'
              }
            >
              {menuItems.map((item) => (
                <li key={item.id} className="mb-1">
                  <Link
                    href={item.routePath}
                    className={`${baseLinkClass} ${isRouteActive(item.routePath) ? activeLinkClass : ''}`}
                  >
                    <span className="mr-2 text-xl">{item.icon}</span>
                    {item.name}
                  </Link>
                </li>
              ))}

              <DarkModeToggle isMobile={false} />
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
}
