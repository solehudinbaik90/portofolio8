export default function CommentCard() {
  return (
    <div className="rounded-lg mt-6 bg-gradient-to-r from-[#FA5252] to-[#DD2476] p-[1px] mr-3">
      <div className="dark:bg-[#232220] bg-[#ffffff] flex p-4 rounded-lg">
        <div>
          <img
            className="md:w-[125px] rounded-xl"
            src="/images/about/profil.jpg"
            alt="user"
          />
        </div>

        <div className="pl-5">
          <div className="flex justify-between items-center">
            <h3 className="dark:text-white text-[22px] font-medium">
              Msoleh
            </h3>
            <span className="dark:text-[#dedede] text-tiny">
              5 menit yang lalu
            </span>
          </div>
          <p className="dark:text-white md:pr-16">
            Isi artikel ini sangat membantu saya sebagai guru IPA. Penjelasannya sangat mudah di cerna senang bisa membacanya
              </p>
          <button className="dark:text-[#dedede] text-tiny hover:text-[#FA5252] dark:hover:text-[#FA5252]">
            Balas
          </button>
        </div>
      </div>
    </div>
  );
}
