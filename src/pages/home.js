import Seo from '@/components/Seo';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import SocialBtn from '@/components/SocialBtn';

const HomePage = () => {
  return (
    <div className="bg-homeBg min-h-screen dark:bg-homeBg-dark bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full">
      <Seo pageTitle="Beranda" />

      <Header />

      <div className="flex flex-col items-center h-[100vh] md:h-[90vh] lg:h-[80vh] xl:h-[71vh] justify-center" data-aos="fade">
        <Image 
          className="rounded-full w-[250px] h-[250px] 2xl:w-[280px] 2xl:h-[280px]" 
          src="/images/about/msoleh.jpg" 
          width={250} 
          height={250} 
          priority 
          alt="Muhamad Soleh" 
        />
        <h3 className="mt-6 mb-1 text-5xl font-semibold dark:text-white">Muhamad Soleh</h3>
        <p className="mb-4 text-[#7B7B7B]">Guru Ilmu Pengetahuan Alam</p>

        <div className="flex space-x-3">
          <SocialBtn />
        </div>

        <a 
          href="/images/cv.pdf" 
          download={true} 
          className="flex items-center bg-gradient-to-r from-[#FA5252] to-[#DD2476] duration-200 transition ease-linear hover:bg-gradient-to-l from-[#DD2476] to-[#fa5252ef] px-8 py-3 text-lg text-white rounded-[35px] mt-6"
        >
          <img src="/images/download.png" alt="download icon" className="mr-2" />
          Download CV
        </a>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(HomePage), { ssr: false });
