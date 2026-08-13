import Modal from 'react-modal';
import Image from 'next/image';
import { FiX } from 'react-icons/fi';
import CommentCard from './CommentCard';
import CommentForm from './CommentForm';
import SocialBtn from '../SocialBtn';

if (typeof window !== 'undefined') {
  Modal.setAppElement('#__next');
}

export default function BlogModal({ isOpen, blog, onClose }) {
  if (!blog) return null;

  const paragraphs = blog.description ? blog.description.split("\n") : [];

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="outline-none flex items-center p-4 md:p-8 rounded-2xl my-8"
      overlayClassName="fixed inset-0 z-[2000000000] bg-black/60 backdrop-blur-sm overflow-y-auto"
    >
      <div className="w-full md:w-10/12 flex items-center lg:w-[850px] bg-white dark:bg-[#323232] mx-auto rounded-xl p-4 md:p-8 absolute left-1/2 top-1/2 transform -translate-x-[50%] -translate-y-[50%] shadow-lg">
        <div className="scrollbarLight overflow-y-scroll max-h-[80vh]">
          <div className="pr-3 pb-2">
            <FiX
              onClick={onClose}
              className="text-7xl cursor-pointer absolute right-2 -top-12 md:-right-10 md:-top-6 text-white transition transform hover:rotate-45 duration-300 ease-in-out"
            />

            <Image
              className="w-full md:h-[450px] object-cover rounded-xl mt-6"
              src={blog.img}
              alt="blog"
              width={700}
              height={400}
              loading="lazy"
            />

            <div className="flex mt-4 text-tiny text-black dark:text-white">
              <span>{blog.date}</span>
              <span className="pl-6 relative after:absolute after:h-1 after:w-1 after:bg-gray-lite after:rounded-full after:left-2 after:top-[50%] transform after:-translate-y-1/2">
                {blog.category}
              </span>
            </div>

            <h2 className="dark:text-white sm:text-3xl mt-2 font-medium">
              {blog.title}
            </h2>

            {paragraphs.map((para, idx) => (
              <p key={idx} className="dark:text-white font-normal text-[15px] sm:text-sm my-4">
                {para}
              </p>
            ))}
          </div>

          <CommentCard />

          <div className="flex items-center md:justify-end space-x-4 mt-8 mr-3">
            <h6 className="dark:text-white text-[20px]">Share:</h6>
            <div className="flex space-x-3">
              <SocialBtn />
            </div>
          </div>

          <div className="pt-3">
            <div className="pr-3 pb-4">
              <CommentForm />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
