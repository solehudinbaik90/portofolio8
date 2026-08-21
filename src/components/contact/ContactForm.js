import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

export default function ContactForm({ condition = false }) {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);

  const handleSendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        toast.success('Message Sent successfully!', {
          position: 'top-right',
          autoClose: 5000,
        });
        formRef.current.reset();
      })
      .catch((error) => {
        toast.error('Ops Message not Sent!', {
          position: 'top-right',
          autoClose: 5000,
        });
        console.error('EmailJS Error:', error);
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <div
      className={`bg-color-810 rounded-xl dark:bg-[#111111] mb-[30px] md:mb-[60px] ${
        condition
          ? 'mx-4 md:mx-[60px] p-4 md:p-16 dark:border-[#212425] dark:border-2'
          : 'dark:border-[#212425] dark:border-2 mb-16 md:p-[48px] p-4'
      }`}
    >
      <h3 className="text-2xl md:text-4xl font-poppins leading-tight mb-8">
        <span className="text-gray-lite dark:text-[#A6A6A6]">
          J&apos;angan ragu untuk menghubungi saya{' '}
        </span>
        <br className="hidden md:block" />
        <span className="font-semibold text-black dark:text-white">
          kapanpun anda mau.
        </span>
      </h3>

      <form ref={formRef} onSubmit={handleSendEmail} className="space-y-8">
        <div className="relative z-0 w-full group">
          <input
            type="text"
            name="name"
            id="name"
            className="block py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#FF6464] peer autofill:bg-transparent"
            placeholder=" "
            required
          />
          <label
            htmlFor="name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 font-poppins"
          >
            Nama *
          </label>
        </div>

        <div className="relative z-0 w-full group">
          <input
            type="email"
            name="email"
            id="user_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#FF6464] peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="user_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 font-poppins"
          >
            Email *
          </label>
        </div>

        <div className="relative z-0 w-full group">
          <input
            type="text"
            name="message"
            id="message"
            className="block py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#FF6464] peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="message"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 font-poppins"
          >
            Pesan *
          </label>
        </div>

        <div className="transition-all duration-300 ease-in-out inline-block hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] rounded-lg mt-3">
          <input
            type="submit"
            disabled={isSending}
            className="transition ease-in duration-200 font-semibold cursor-pointer border-color-910 hover:border-transparent px-6 py-2 rounded-lg border-[2px] text-black dark:text-white hover:text-white disabled:opacity-50 font-poppins"
            value={isSending ? 'Sending...' : 'Kirim'}
          />
        </div>
      </form>
    </div>
  );
}
