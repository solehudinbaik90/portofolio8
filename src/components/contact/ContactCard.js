import Image from 'next/image';
import { useTheme } from 'next-themes';
import { contactInfoList } from '@/data/contactData';

export default function ContactCard() {
  const { theme } = useTheme();

  return (
    <>
      {contactInfoList.map((item, index) => (
        <div 
          key={index}
          style={{ background: theme === 'dark' ? 'transparent' : item?.bg }}
          className="flex flex-wrap p-[30px] border-[#A6A6A6] gap-2 rounded-xl"
        >
          <span className="w-8 mt-2">
            <Image 
              src={item.icon} 
              width={30} 
              height={20} 
              alt="icon" 
              className="text-4xl dark:text-white"
            />
          </span>
          <div className="space-y-2">
            <p className="text-xl font-semibold dark:text-white">
              {item?.title} :
            </p>
            {item?.info}
          </div>
        </div>
      ))}
    </>
  );
}
