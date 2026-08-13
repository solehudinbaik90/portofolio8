import { useTheme } from 'next-themes';
import { timelineData } from '@/data/resumeData';

export default function Timeline() {
  const { theme } = useTheme();

  return (
    <>
      {timelineData.map((group) => (
        <div key={group.id}>
          <div className="flex items-center space-x-2 mb-4">
            <div className="text-6xl text-[#F95054]">{group.icon}</div>
            <h4 className="text-5xl dark:text-white font-medium">{group.title}</h4>
          </div>

          {group.items.map((item) => (
            <div
              key={item.id}
              className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2"
              style={{ background: theme === 'dark' ? 'transparent' : item?.bg }}
            >
              <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">{item.date}</span>
              <h3 className="text-xl dark:text-white">{item.title}</h3>
              <p className="dark:text-[#b7b7b7]">{item.place}</p>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}