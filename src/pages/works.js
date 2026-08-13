import { useState } from 'react';
import Seo from '@/components/Seo';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Masonry from 'react-masonry-css';
import { useTheme } from 'next-themes';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WorkModal from '@/components/works/WorkModal';
import { portfolioItems } from '@/data/worksData';

const FILTER_TABS = [
  { label: 'All', value: 'All' },
  { label: 'Video', value: 'Video' },
  { label: 'Web Design', value: 'Web Design' },
  { label: 'Logo', value: 'Logo' },
  { label: 'Graphic Design', value: 'UI/UX' },
];

const breakpointColumnsObj = { default: 3, 1100: 2, 500: 1 };

const WorksPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [displayItems, setDisplayItems] = useState(portfolioItems);
  const { theme } = useTheme();

  const handleFilterClick = (category) => {
    setActiveFilter(category);
    setDisplayItems(
      category === 'All'
        ? portfolioItems
        : portfolioItems.filter((item) => item.tag === category)
    );
  };

  const handleOpenDetails = (id) => {
    const foundProject = portfolioItems.find((item) => item.id === id);
    setSelectedProject(foundProject);
    setModalOpen(true);
  };

  return (
    <div className="bg-homeBg min-h-screen dark:bg-homeBg-dark bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full">
      <Seo pageTitle="Proyek" />

      <Header />

      <div className="container lg:rounded-2xl bg-white dark:bg-[#111111]">
        <div data-aos="fade">
          <div className="mb-8 px-4 sm:px-5 md:px-10 lg:px-[60px]">
            <div className="py-12">
              <h2 className="after-effect after:left-48 mt-12 lg:mt-0">Proyek</h2>

              <ul className="mt-[40px] flex w-full justify-start md:justify-end flex-wrap font-medium pb-12">
                {FILTER_TABS.map((tab, index) => (
                  <li
                    key={tab.value}
                    onClick={() => handleFilterClick(tab.value)}
                    className={`cursor-pointer ${
                      activeFilter === tab.value ? 'text-[#FA5252]' : 'fillter-btn'
                    } ${index < FILTER_TABS.length - 1 ? 'mr-4 md:mx-4' : ''}`}
                  >
                    {tab.label}
                  </li>
                ))}
              </ul>

              <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
              >
                {displayItems.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => handleOpenDetails(item.id)}
                    className="rounded-lg p-6 dark:border-[2px] border-[#212425]"
                    style={{ background: theme === 'dark' ? 'transparent' : item?.bg }}
                  >
                    <div className="overflow-hidden rounded-lg">
                      <Image
                        className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto"
                        src={item.imgSmall}
                        width={300}
                        height={300}
                        priority
                        alt={item.title}
                      />
                    </div>
                    <span className="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]">
                      {item.tag}
                    </span>
                    <h2 className="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2">
                      {item.title}
                    </h2>
                  </div>
                ))}
              </Masonry>
            </div>
          </div>

          <WorkModal
            isOpen={modalOpen}
            project={selectedProject}
            onClose={() => setModalOpen(false)}
          />

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(WorksPage), { ssr: false });
