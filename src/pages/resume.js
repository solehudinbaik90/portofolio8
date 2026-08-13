import dynamic from 'next/dynamic';
import Seo from '@/components/Seo';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Timeline from '@/components/resume/Timeline';
import Skills from '@/components/resume/Skills';
import Knowledges from '@/components/resume/Knowledges';

const ResumePage = () => {
  return (
    <div className="bg-homeBg min-h-screen dark:bg-homeBg-dark bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full">
      <Seo pageTitle="Resume" />

      <Header />

      <div className="container lg:rounded-2xl bg-white dark:bg-[#111111]">
        <div data-aos="fade">

          <div className="container sm:px-5 md:px-10 lg:px-20">
            <div className="py-12 px-4">
              <h2 className="after-effect after:left-44 mb-[40px] mt-12 lg:mt-0">Resume</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">
                <Timeline />
              </div>
            </div>
          </div>

          <div className="container bg-color-810 dark:bg-[#0D0D0D] py-12 px-4 sm:px-5 md:px-10 lg:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="col-span-1">
                <h4 className="text-5xl dark:text-white font-medium mb-6">Keahlian Bekerja</h4>
                <Skills />
              </div>
              <div className="col-span-1">
                <h4 className="text-5xl dark:text-white font-medium mb-8">Pengetahuan</h4>
                <div className="flex gap-x-3 gap-y-3 md:gap-y-3 md:gap-x-3 flex-wrap">
                  <Knowledges />
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(ResumePage), { ssr: false });
