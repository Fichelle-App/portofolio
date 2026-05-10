const Footer = () => {
  return (
    <footer className="mt-32 border-t border-zinc-800 bg-zinc-900/40 backdrop-blur-xl">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8 py-10">
        
        {/* TOP */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          
          {/* LOGO */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-black bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
              Portofolio
            </h1>

            <p className="text-zinc-400 mt-3 max-w-[300px] text-sm leading-relaxed">
              Programmer & Game Developer yang berfokus pada
              pengembangan game menggunakan Unity.
            </p>
          </div>

          {/* MENU */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-7">
            <a
              href="#beranda"
              className="text-zinc-400 hover:text-violet-400 transition-all duration-300"
            >
              Beranda
            </a>

            <a
              href="#tentang"
              className="text-zinc-400 hover:text-violet-400 transition-all duration-300"
            >
              Tentang
            </a>

            <a
              href="#proyek"
              className="text-zinc-400 hover:text-violet-400 transition-all duration-300"
            >
              Proyek
            </a>

            <a
              href="#kontak"
              className="text-zinc-400 hover:text-violet-400 transition-all duration-300"
            >
              Kontak
            </a>
          </div>

          {/* SOCIAL */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Fichelle-App"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center hover:bg-violet-600 hover:border-violet-500 hover:-translate-y-1 transition-all duration-300"
            >
              <i className="ri-github-fill ri-lg"></i>
            </a>

            <a
              href="https://instagram.com/rmn.arda_"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center hover:bg-pink-600 hover:border-pink-500 hover:-translate-y-1 transition-all duration-300"
            >
              <i className="ri-instagram-fill ri-lg"></i>
            </a>

            <a
              href="https://twitter.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center hover:bg-sky-500 hover:border-sky-400 hover:-translate-y-1 transition-all duration-300"
            >
              <i className="ri-twitter-x-fill ri-lg"></i>
            </a>

            <a
              href="https://youtube.com/@ardakuahsoto"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center hover:bg-red-600 hover:border-red-500 hover:-translate-y-1 transition-all duration-300"
            >
              <i className="ri-youtube-fill ri-lg"></i>
            </a>
          </div>
        </div>

        {/* LINE */}
        <div className="w-full h-[1px] bg-zinc-800 my-8"></div>
      </div>
    </footer>
  );
};

export default Footer;