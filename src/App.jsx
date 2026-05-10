import { useEffect, useRef } from "react";
import DataImage from "./data";
import { listTools, listProyek } from "./data";
import Lenis from "lenis";

function App() {
  const audioRef = useRef(null);

  useEffect(() => {
  // AUDIO
  const playAudio = async () => {
    try {
      await audioRef.current.play();
    } catch {
      console.log("Autoplay diblokir browser");
    }
  };

  const handleUserInteraction = () => {
    playAudio();

    window.removeEventListener("click", handleUserInteraction);
  };

  window.addEventListener("click", handleUserInteraction);

  // LENIS SMOOTH SCROLL
  const lenis = new Lenis({
    duration: 1.2,
    smoothWheel: true,
    smoothTouch: true,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return () => {
    window.removeEventListener("click", handleUserInteraction);

    lenis.destroy();
  };
}, []);

  return (
    <>
      <audio ref={audioRef} autoPlay loop>
        <source src="assets/music.mp3" type="audio/mp3" />
      </audio>

      {/* BACKGROUND */}
      <div className="fixed top-0 left-0 -z-10 w-full h-full bg-[#050505] overflow-hidden">
        <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-violet-700 rounded-full blur-[120px] opacity-20"></div>

        <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-fuchsia-700 rounded-full blur-[120px] opacity-20"></div>

        <div className="absolute top-[40%] left-[40%] w-[250px] h-[250px] bg-violet-500 rounded-full blur-[150px] opacity-10"></div>
      </div>

      <div className="container mx-auto px-5 sm:px-6 lg:px-8 text-white overflow-hidden">
        {/* HERO */}
        <section
          id="beranda"
          className="min-h-screen grid lg:grid-cols-2 gap-14 items-center pt-28 pb-16"
        >
          {/* LEFT */}
          <div
            data-aos="fade-right"
            data-aos-duration="1200"
            className="order-2 lg:order-1"
          >
            {/* TYPING BADGE */}
            <div className="inline-flex items-center gap-3 mb-7 bg-zinc-900/70 border border-zinc-800 backdrop-blur-xl px-4 py-3 rounded-full shadow-lg shadow-violet-900/10">
              <img
                src={DataImage.HeroImage}
                alt="Hero"
                className="w-9 h-9 rounded-full object-cover border border-zinc-700"
              />

              <div className="text-[12px] sm:text-sm opacity-90 whitespace-nowrap overflow-hidden">
                <span>"Bukan bug, </span>

                <span className="animate-typing ml-1">
                  ini fitur tambahan"
                </span>
              </div>
            </div>

            {/* TITLE */}
            <h1 className="font-black leading-[1.1] mb-6 text-5xl sm:text-6xl lg:text-7xl">
              Halo Saya,
              <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-purple-500 bg-clip-text text-transparent">
                Romansa Ardana
              </span>
            </h1>

            {/* DESC */}
            <p className="text-zinc-400 leading-relaxed text-base sm:text-lg lg:w-[90%] mb-9">
              Saya berfokus pada pengembangan
              game menggunakan Unity serta membangun pengalaman gameplay yang
              menarik, immersive, dan optimal.
            </p>

            {/* BUTTON */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#proyek"
                className="bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 sm:px-7 py-4 rounded-2xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-violet-700/30"
              >
                Lihat Project
              </a>

              <a
                href="#kontak"
                className="border border-zinc-700 bg-zinc-900/40 backdrop-blur-lg px-6 sm:px-7 py-4 rounded-2xl hover:bg-zinc-800 transition-all duration-300"
              >
                Hubungi Saya
              </a>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-14">
              <div className="bg-zinc-900/40 border border-zinc-800 rounded-3xl p-5 backdrop-blur-lg">
                <h1 className="text-3xl sm:text-4xl font-bold text-violet-400">
                  3+
                </h1>

                <p className="text-zinc-400 text-sm sm:text-base">Project</p>
              </div>

              <div className="bg-zinc-900/40 border border-zinc-800 rounded-3xl p-5 backdrop-blur-lg">
                <h1 className="text-3xl sm:text-4xl font-bold text-violet-400">
                  1+
                </h1>

                <p className="text-zinc-400 text-sm sm:text-base">Tahun</p>
              </div>

              <div className="bg-zinc-900/40 border border-zinc-800 rounded-3xl p-5 backdrop-blur-lg">
                <h1 className="text-2xl sm:text-3xl font-bold text-violet-400">
                  Unity
                </h1>

                <p className="text-zinc-400 text-sm sm:text-base">
                  Developer
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className="relative flex justify-center order-1 lg:order-2"
            data-aos="fade-left"
            data-aos-duration="1200"
          >
            <div className="absolute w-[280px] sm:w-[400px] h-[280px] sm:h-[400px] bg-violet-700 rounded-full blur-[120px] opacity-25"></div>

            <div className="relative group">
              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-r from-violet-600 to-fuchsia-600 blur-xl opacity-30 group-hover:opacity-50 transition-all duration-500"></div>

              <img
                src={DataImage.HeroImage}
                alt="Hero"
                className="relative z-10 w-[260px] sm:w-[350px] lg:w-[420px] rounded-[35px] border border-zinc-700 object-cover hover:scale-[1.02] transition-all duration-500 shadow-2xl shadow-violet-900/30"
              />
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section
          id="tentang"
          className="py-24"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <div className="bg-zinc-900/50 border border-zinc-800 backdrop-blur-xl rounded-[35px] p-7 sm:p-10 lg:p-16">
            <div className="flex flex-col lg:flex-row gap-10 items-start">
              <div className="lg:w-1/3">
                <h1 className="text-4xl sm:text-5xl font-black leading-tight">
                  Tentang
                  <span className="block text-violet-400">Saya</span>
                </h1>
              </div>

              <div className="lg:w-2/3">
                <p className="text-zinc-400 leading-loose text-base sm:text-lg">
                  Dari dulu saya memang punya ketertarikan besar di dunia
                  programming dan bikin game. Buat saya, game yang bagus itu
                  harus punya gameplay yang seru, sistem yang optimal, dan
                  visual yang immersive. Karena itu saya selalu mencoba
                  menggabungkan performa, desain, dan pengalaman bermain agar
                  project yang dibuat terasa lebih hidup dan menarik.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TOOLS */}
        <section className="py-24">
          <div className="mb-14">
            <h1 className="text-4xl sm:text-5xl font-black mb-4">
              Tools <span className="text-violet-400">Stack</span>
            </h1>

            <p className="text-zinc-400 text-base sm:text-lg">
              Tools yang biasa saya gunakan untuk development.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
            {listTools.map((tool) => (
              <div
                key={tool.id}
                className="group bg-zinc-900/40 border border-zinc-800 hover:border-violet-500 p-5 rounded-[28px] backdrop-blur-lg transition-all duration-300 hover:-translate-y-2"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <div className="bg-zinc-800/80 w-fit p-4 rounded-2xl mb-5 group-hover:bg-violet-600/20 transition-all duration-300">
                  <img
                    src={tool.gambar}
                    alt="Tool"
                    className="w-12 sm:w-14 group-hover:scale-110 transition-all duration-300"
                  />
                </div>

                <h1 className="text-lg sm:text-xl font-bold mb-2">
                  {tool.nama}
                </h1>

                <p className="text-zinc-400 text-sm sm:text-base">
                  {tool.ket}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECT */}
        <section id="proyek" className="py-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-black mb-4">
              My <span className="text-violet-400">Projects</span>
            </h1>

            <p className="text-zinc-400 text-base sm:text-lg">
              Beberapa project yang telah saya kerjakan.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-7">
            {listProyek.map((proyek) => (
              <div
                key={proyek.id}
                className="bg-zinc-900/50 border border-zinc-800 rounded-[30px] overflow-hidden backdrop-blur-lg hover:-translate-y-3 hover:border-violet-500 transition-all duration-500"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <div className="overflow-hidden">
                  <img
                    src={proyek.gambar}
                    alt="Project"
                    className="hover:scale-110 transition-all duration-700 w-full"
                  />
                </div>

                <div className="p-6">
                  <h1 className="text-2xl font-bold mb-4">
                    {proyek.nama}
                  </h1>

                  <p className="text-zinc-400 leading-loose mb-5 text-sm sm:text-base">
                    {proyek.desk}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-7">
                    {proyek.tools.map((tool, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 rounded-full bg-violet-600/20 border border-violet-500/30 text-sm"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <a
                    href={proyek.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-gradient-to-r from-violet-600 to-fuchsia-600 py-4 rounded-2xl font-semibold hover:opacity-90 transition-all duration-300"
                  >
                    Lihat Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="kontak" className="py-24">
          <div className="text-center mb-14">
            <h1 className="text-4xl sm:text-5xl font-black mb-4">
              Hubungi <span className="text-violet-400">Saya</span>
            </h1>

            <p className="text-zinc-400 text-base sm:text-lg">
              Mari terhubung dengan saya.
            </p>
          </div>

          <form
            action="https://formsubmit.co/romansaardanap@gmail.com"
            method="POST"
            className="max-w-3xl mx-auto bg-zinc-900/50 border border-zinc-800 backdrop-blur-xl p-6 sm:p-10 rounded-[35px]"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                name="nama"
                placeholder="Nama Lengkap"
                className="bg-zinc-800 border border-zinc-700 p-4 rounded-2xl outline-none focus:border-violet-500 transition-all duration-300"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                className="bg-zinc-800 border border-zinc-700 p-4 rounded-2xl outline-none focus:border-violet-500 transition-all duration-300"
                required
              />
            </div>

            <textarea
              name="pesan"
              rows="7"
              placeholder="Pesan..."
              className="w-full bg-zinc-800 border border-zinc-700 p-4 rounded-2xl outline-none focus:border-violet-500 mb-6 transition-all duration-300"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 py-4 rounded-2xl font-semibold hover:scale-[1.02] transition-all duration-300"
            >
              Kirim Pesan
            </button>
          </form>
        </section>
      </div>
    </>
  );
}

export default App;