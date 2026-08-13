import { knowledgesList } from '@/data/resumeData';

export default function Knowledges() {
  return (
    <>
      {knowledgesList.map((tag, index) => (
        <button
          key={index}
          className="resume-btn text-[15px]"
        >
          {tag}
        </button>
      ))}
    </>
  );
}
