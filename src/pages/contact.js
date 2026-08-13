import Seo from '@/components/Seo';
import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import ContactForm from '@/components/contact/ContactForm';
import ContactCard from '@/components/contact/ContactCard';
import Footer from '@/components/Footer';

const ContactPage = () => {
  return (
    <div className="bg-homeBg min-h-screen dark:bg-homeBg-dark bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full">
      <Seo pageTitle="Kontak" />
      <Header />

      <div className="container lg:rounded-2xl bg-white dark:bg-[#111111]">
        <div data-aos="fade">
          <div className="py-12 px-4 sm:px-5 md:px-10 lg:px-20">
            <h2 className="after-effect after:left-40 mb-[40px] mt-12 lg:mt-0">Contact</h2>

            <div className="lg:flex gap-x-20">
              <div className="w-full lg:w-[40%] xl:w-[30%] space-y-6">
                <ContactCard />
              </div>
              <div className="w-full mt-8 lg:mt-0 lg:w-[60%] xl:w-[70%]">
                <ContactForm condition={false} />
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(ContactPage), { ssr: false });
