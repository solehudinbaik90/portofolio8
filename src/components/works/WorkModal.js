import Image from 'next/image';
import Modal from 'react-modal';
import { FiX, FiExternalLink, FiUser, FiCode, FiFilePlus } from 'react-icons/fi';

if (typeof window !== 'undefined') {
  Modal.setAppElement('#__next');
}

export default function WorkModal({ isOpen, project, onClose }) {
  if (!project) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="outline-none flex items-center p-4 md:p-8 rounded-2xl my-8"
    >
      <div className="w-full md:w-10/12 flex items-center lg:w-[850px] bg-white dark:bg-[#323232] mx-auto rounded-xl p-4 md:p-8 absolute left-1/2 top-1/2 transform -translate-x-[50%] -translate-y-[50%] shadow-lg">
        <div className="overflow-y-scroll max-h-[80vh] no-scrollbar">

          <FiX
            onClick={onClose}
            className="text-7xl cursor-pointer absolute right-2 -top-12 md:-right-10 md:-top-6 z-50 text-white transition transform hover:rotate-45 duration-300 ease-in-out"
          />

          <h2 className="text-[#ef4060] dark:hover:text-[#FA5252] text-4xl text-center font-bold font-poppins">
            {project.tag} Project
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 my-6">
            <div className="space-y-2">
              <p className="dark:text-white flex items-center text-[15px] sm:text-lg font-poppins">
                <FiFilePlus className="sm:text-lg hidden sm:block mr-2 md:text-xl" />
                Project :&nbsp; <span className="font-medium">Website</span>
              </p>
              <p className="dark:text-white flex items-center text-[15px] sm:text-lg font-poppins">
                <FiCode className="text-lg mr-2 hidden sm:block" />
                Languages :&nbsp;<span className="font-medium">{project.langages}</span>
              </p>
            </div>
            <div className="space-y-2">
              <p className="dark:text-white flex items-center mt-2 lg:mt-0 text-[15px] sm:text-lg font-poppins">
                <FiUser className="text-lg mr-2 hidden sm:block" />
                Client :&nbsp;<span className="font-medium">{project.client}</span>
              </p>
              <p className="dark:text-white flex items-center text-[15px] sm:text-lg font-poppins">
                <FiExternalLink className="text-lg mr-2 hidden sm:block" />
                Preview :&nbsp;
                <span className="font-medium transition-all duration-300 ease-in-out hover:text-[#ef4060]">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    {project.linkText}
                  </a>
                </span>
              </p>
            </div>
          </div>

          <p className="dark:text-white text-2line font-normal text-[15px] sm:text-sm">
            {project.description}
          </p>

          <Image
            className="w-full md:h-[450px] h-auto object-cover rounded-xl mt-6"
            src={project.img}
            alt={project.title}
            width={620}
            height={420}
            loading="lazy"
          />
        </div>
      </div>
    </Modal>
  );
}
