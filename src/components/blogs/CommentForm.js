import { useState } from 'react';

export default function CommentForm() {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Komentar dikirim:", comment);
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <label className="block mb-2">
        <span className="dark:text-white text-[25px] font-medium">
          Tinggalkan Balasan
        </span>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="block w-full mt-3 p-3 dark:text-white hover:outline-none hover:border-0 focus:outline-none rounded dark:bg-[#0b0b0b5e] bg-gray"
          rows="3"
          required
        />
      </label>
      <button
        type="submit"
        className="flex items-center bg-gradient-to-r from-[#FA5252] to-[#DD2476] duration-200 transition ease-linear hover:bg-gradient-to-l from-[#DD2476] to-[#fa5252ef] px-8 py-[12px] text-lg text-white rounded-[35px] mt-8"
      >
        komentar
      </button>
    </form>
  );
}
