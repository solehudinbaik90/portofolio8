import { MdOutlineBusinessCenter, MdOutlineSchool } from 'react-icons/md';
import { FaAward } from 'react-icons/fa';

export const timelineData = [
  {
    id: "edu",
    title: "Pendidikan",
    icon: <MdOutlineSchool />,
    items: [
      { id: 1, date: "2006 - 2008", title: "Lulus SMA tak bergelar", place: "SMAN 2 Kabupaten Tangerang", bg: "#FFF4F4" },
      { id: 2, date: "2009 - 2015", title: "Sarjana Fisika", place: "UIN Syarif Hidayatullah Jakarta", bg: "#FFF0F8" }
    ]
  },
  {
    id: "exp",
    title: "Pengalaman",
    icon: <MdOutlineBusinessCenter />,
    items: [
      { id: 3, date: "2013 - 2020", title: "Guru Fisika & IPA", place: "SMK PARAMARTA", bg: "#EEF5FA" },
      { id: 4, date: "2014 - 2020", title: "Guru IPA", place: "MTs Raudlatul Ilmiyah", bg: "#F2F4FF" }
    ]
  },
  {
    id: "awards",
    title: "Penghargaan",
    icon: <FaAward />,
    items: [
      { id: 5, date: "2017", title: "Guru terbaik sepanjang zaman", place: "Sekolah Kehidupan", bg: "#FCF4FF" },
      { id: 6, date: "2018", title: "Guru paling humoris", place: "Sekolah Kehidupan", bg: "#FCF9F2" },
      { id: 7, date: "2020", title: "Guru paling handal", place: "Sekolah tanpa jejak", bg: "#FCF4FF" }
    ]
  }
];

export const workingSkills = [
  { id: 1, name: "Photoshop", level: "85%", color: "bg-[#FF6464]" },
  { id: 2, name: "Microsoft Office", level: "95%", color: "bg-[#9272D4]" },
  { id: 3, name: "Illustrator", level: "70%", color: "bg-[#5185D4]" },
  { id: 4, name: "Java Script", level: "70%", color: "bg-[#CA56F2]" }
];

export const knowledgesList = [
  "Digital Marketing", "Web Design", "Social Media", "Time Management",
  "Flexibility", "Print Design", "UI/UX", "Communication"
];
