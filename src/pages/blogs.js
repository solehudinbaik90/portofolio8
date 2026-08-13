import { useState } from 'react';
import Seo from '@/components/Seo';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogModal from '@/components/blogs/BlogModal';
import { blogItems } from '@/data/blogsData';
import { useTheme } from 'next-themes';

const BlogsPage = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const { theme } = useTheme();


  const handleOpenBlogDetails = (id) => {
    const foundBlog = blogItems.find(item => item.id === id);
    setSelectedBlog(foundBlog);
    setModalOpen(true);
  };

  return (
    <div className="bg-homeBg min-h-screen dark:bg-homeBg-dark bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full">
      <Seo pageTitle="Artikel" />

      <Header />

      <div className="container lg:rounded-2xl bg-white dark:bg-[#111111]">
        <div data-aos="fade">

          <div className="px-4 sm:px-5 md:px-10 lg:px-[60px]">
            <div className="py-12">
              <h2 className="after-effect after:left-32 mt-12 lg:mt-0">Artikel</h2>


              <div className="grid gap-x-10 gap-y-7 mb-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-[40px]">
                {blogItems.map((item) => (
                  <div
                    key={item.id}
                    className="p-5 rounded-lg mb-2 h-full dark:border-[#212425] dark:border-2"
                    style={{ background: theme === 'dark' ? 'transparent' : item?.bg }}
                  >

                    <div className="overflow-hidden rounded-lg">
                      <Image
                        onClick={() => handleOpenBlogDetails(item.id)}
                        className="rounded-lg w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110"
                        src={item.imgSmall}
                        alt="blog"
                        width={310}
                        height={310}
                      />
                    </div>

                    <div className="flex mt-4 text-tiny text-gray-lite dark:text-[#A6A6A6]">
                      <span>{item.date}</span>
                      <span className="pl-6 relative after:absolute after:h-1 after:w-1 after:bg-gray-lite after:rounded-full after:left-2 after:top-[50%] transform after:-translate-y-1/2">
                        {item.category}
                      </span>
                    </div>

                    <h3 
                      onClick={() => handleOpenBlogDetails(item.id)}
                      className="text-lg font-medium dark:text-white duration-300 transition cursor-pointer mt-3 pr-4 hover:text-[#FA5252] dark:hover:text-[#FA5252]"
                    >
                      {item.title}
                    </h3>
                  </div>
                ))}
              </div>

            </div>
          </div>


          <BlogModal 
            isOpen={modalOpen} 
            blog={selectedBlog} 
            onClose={() => setModalOpen(false)} 
          />

          <Footer />

        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(BlogsPage), { ssr: false });
