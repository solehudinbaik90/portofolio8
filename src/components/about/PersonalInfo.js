import { FaMobileAlt, FaMapMarkerAlt, FaEnvelopeOpenText, FaRegCalendarAlt } from 'react-icons/fa';
import { personalInfo } from '@/data/aboutData';

const iconMap = {
  phone: <FaMobileAlt />,
  map: <FaMapMarkerAlt />,
  email: <FaEnvelopeOpenText />,
  calendar: <FaRegCalendarAlt />
};

export default function PersonalInfo() {
  return (
    <>
      {personalInfoData.map((item) => (
        <div key={item.id} className="flex">
          <span className={`${item.iconColor} dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 h-12`}>
            {iconMap[item.iconType]}
          </span>
          <div className="space-y-1">
            <p className="text-xs text-gray-lite dark:text-color-910">{item.name}</p>
            <h6 className="font-medium dark:text-white text-sm sm:text-base">{item.meta}</h6>
          </div>
        </div>
      ))}
    </>
  );
}
