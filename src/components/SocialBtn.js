import { FaFacebookF, FaTwitter, FaDribbble, FaLinkedinIn } from 'react-icons/fa';

const socials = [
  { id: 1, link: "https://www.facebook.com/", icon: <FaFacebookF />, iconClass: "text-[#1773EA]" },
  { id: 2, link: "https://twitter.com/", icon: <FaTwitter />, iconClass: "text-[#1C9CEA]" },
  { id: 3, link: "https://dribbble.com/", icon: <FaDribbble />, iconClass: "text-[#e14a84]" },
  { id: 4, link: "https://www.linkedin.com/", icon: <FaLinkedinIn />, iconClass: "text-[#0072b1]" }
];

export default function SocialBtn() {
  return (
    <>
      {socials.map((item) => (
        <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">
          <span className={`socialbtn ${item.iconClass}`}>
            {item.icon}
          </span>
        </a>
      ))}
    </>
  );
}