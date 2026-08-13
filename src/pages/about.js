import Seo from '@/components/Seo';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import ServiceGrid from '@/components/about/ServiceGrid';
import BrandSlider from '@/components/about/BrandSlider';
import Footer from '@/components/Footer';
import PersonalInfo from '@/components/about/PersonalInfo';



const AboutPage = () => {
  return (
    <div className="bg-homeBg min-h-screen dark:bg-homeBg-dark bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full">
      <Seo pageTitle="Profil" />

      <Header />

      <div className="container lg:rounded-2xl bg-white dark:bg-[#111111] px-4 sm:px-5 md:px-10 lg:px-20">
        <div data-aos="fade">

          <div className="py-12">
            <h2 className="after-effect after:left-52 mt-12 lg:mt-0">
              Profil Saya
            </h2>

            <div className="grid grid-cols-12 md:gap-10 pt-4 md:pt-[40px] items-center">

              <div className="col-span-12 md:col-span-4">
                <Image
                  className="w-full md:w-[330px] md:h-[400px] object-cover overflow-hidden rounded-[35px] mb-3 md:mb-0"
                  src="/images/about/profil.jpg"
                  width={300}
                  height={400}
                  alt="Profil Muhamad Soleh"
                  priority
                />
              </div>

              <div className="col-span-12 md:col-span-8 space-y-2.5">
                <div className="md:mr-12 xl:mr-16">
                  <h3 className="text-4xl font-medium dark:text-white mb-2.5">
                    Who am i?
                  </h3>
                  <p className="text-gray-lite dark:text-color-910 leading-7">
                    Muhamad Soleh seorang pendidik dengan usia yang tidak muda lagi tapi ingin terus berjuang mencerdaskan kehidupan bangsa demi indonesia yang lebih cerah. Selalu berlatih, berinovasi mengembangan diri agar menjadi pendidik profesional.
                  </p>
                  <p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910">
                    pendidik yang berkomitmen membantu peserta didik berkembang melalui pembelajaran yang inspiratif, interaktif, dan didukung oleh teknologi pendidikan.
                  </p>
                </div>

                <div>
                  <h3 className="text-4xl font-medium my-5 dark:text-white">
                    Personal Info
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <PersonalInfo />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pb-12">
            <h3 className="text-[35px] dark:text-white font-medium pb-5">
              What I do!
            </h3>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
              <ServiceGrid />
            </div>
          </div>

          <div className="bg-[#F8FBFB] dark:bg-[#0D0D0D] max-w-full h-auto py-10 rounded-xl">
            <h3 className="text-center dark:text-white text-6xl mb-3 font-semibold">
              Klien
            </h3>
            <BrandSlider />
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(AboutPage), { ssr: false });
