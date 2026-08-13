import { AiOutlineHome } from 'react-icons/ai';
import { FaRegUser, FaBlogger } from 'react-icons/fa';
import { CgNotes } from 'react-icons/cg';
import { FiCodesandbox } from 'react-icons/fi';
import { RiContactsBookLine } from 'react-icons/ri';

export const menuItems = [
  { 
    id: "01", 
    name: "Beranda", 
    routePath: "/home", 
    icon: <AiOutlineHome /> 
  },
  { 
    id: "02", 
    name: "Profil", 
    routePath: "/about", 
    icon: <FaRegUser /> 
  },
  { 
    id: "06", 
    name: "Resume", 
    routePath: "/resume", 
    icon: <CgNotes />
  },
  { 
    id: "03", 
    name: "Proyek", 
    routePath: "/works", 
    icon: <FiCodesandbox /> 
  },
  { 
    id: "04", 
    name: "Artikel", 
    routePath: "/blogs", 
    icon: <FaBlogger /> 
  },
  { 
    id: "05", 
    name: "Kontak", 
    routePath: "/contact", 
    icon: <RiContactsBookLine /> 
  }
];
