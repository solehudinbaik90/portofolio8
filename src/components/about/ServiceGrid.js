import Image from 'next/image';
import { useTheme } from 'next-themes';
import { serviceItems } from '@/data/aboutData';

export default function ServiceGrid() {
  const { theme } = useTheme();

  return (
    <>
      {serviceItems.map((item) => (
        <div 
          key={item.id} 
          className="about-box dark:bg-transparent"
          style={{ background: theme === 'dark' ? 'transparent' : item?.bg }}
        >
          <Image className="w-10 h-10 object-contain block" src={item.icon} width={40} height={40} alt="service icon" />
          <div className="space-y-2 break-all">
            <h3 className="dark:text-white text-xl font-semibold">{item.title}</h3>
            <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]">{item.des}</p>
          </div>
        </div>
      ))}
    </>
  );
}