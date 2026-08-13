import { workingSkills } from '@/data/resumeData';

export default function Skills() {
  return (
    <>
      {workingSkills.map((skill) => (
        <div key={skill.id} className="mb-7">
          <div className="flex justify-between py-1">
            <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">
              {skill.name}
            </span>
            <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
              {skill.level}
            </span>
          </div>

          <div className="w-full bg-[#edf2f2] dark:bg-[#1c1c1c] h-1.5 rounded-full overflow-hidden">
            <div
              className={`h-full ${skill.color} rounded-full transition-all duration-500`}
              style={{ width: skill.level }}
            />
          </div>
        </div>
      ))}
    </>
  );
}
