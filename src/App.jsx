import { useEffect, useRef } from "react";
import DataImage from "./data";
import { listTools, listProyek } from "./data";
import Lenis from "lenis";

function App() {
  const audioRef = useRef(null);

  useEffect(() => {
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
      {/* <audio ref={audioRef} autoPlay loop>
        <source src="assets/music.mp3" type="audio/mp3" />
      </audio> */}

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 bg-[#f5f1e8] overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_2px,transparent_2px)] [background-size:24px_24px]" />

        {/* SHAPES */}
        <div className="absolute top-20 left-20 w-28 h-28 bg-pink-400 border-4 border-black rounded-full animate-float" />

        <div className="absolute bottom-20 right-20 w-40 h-40 bg-yellow-300 border-4 border-black rotate-12 animate-float2" />

        <div className="absolute top-[40%] left-[45%] w-16 h-16 bg-[#00c2ff] border-4 border-black rotate-45 animate-spin-slow hidden lg:block" />

        {/* FLOATING UNITY */}
        <div className="absolute top-[18%] right-[8%] animate-float hidden lg:block">
          <div className="bg-white border-4 border-black rounded-3xl p-5 shadow-[8px_8px_0px_#000] rotate-[-8deg] hover:rotate-0 transition-all duration-300">
            <img
              src="/assets/tools/unity.png"
              alt="Unity"
              className="w-20 h-20 object-contain"
            />
          </div>
        </div>

        {/* FLOATING UNREAL */}
        <div className="absolute bottom-[12%] left-[8%] animate-float2 hidden lg:block">
          <div className="bg-white border-4 border-black rounded-3xl p-5 shadow-[8px_8px_0px_#000] rotate-[8deg] hover:rotate-0 transition-all duration-300">
            <img
              src="/assets/tools/unreal.png"
              alt="Unreal Engine"
              className="w-20 h-20 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-5 sm:px-6 lg:px-8 text-black overflow-hidden">
        {/* HERO */}
        <section
          id="beranda"
          className="min-h-screen grid lg:grid-cols-2 gap-14 items-center pt-32 pb-16"
        >
          {/* LEFT */}
          <div
            data-aos="fade-right"
            className="animate-fade-in-up"
          >
            {/* BADGE */}
            <div className="inline-flex items-center gap-3 mb-8 bg-white border-4 border-black rounded-2xl px-4 py-3 shadow-[6px_6px_0px_#000] -rotate-1 hover:rotate-1 hover:-translate-y-1 transition-all duration-300">
              <img
                src={DataImage.HeroImage}
                alt="Hero"
                className="w-10 h-10 rounded-xl border-4 border-black object-cover"
              />

              <div className="flex items-center gap-1 font-bold text-sm whitespace-nowrap">
                <span>"Bukan bug,</span>

                <span className="animate-typing bg-yellow-300 px-1">
                  ini fitur tambahan"
                </span>
              </div>
            </div>

            {/* TITLE */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black leading-none uppercase mb-6">
              Halo, Saya
              <span className="block w-fit mt-3 bg-pink-400 px-4 border-4 border-black shadow-[8px_8px_0px_#000] rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-300">
                Arda!
              </span>
            </h1>

            {/* DESC */}
            <p className="text-lg font-medium leading-relaxed border-l-4 border-black pl-5 mb-10 lg:w-[90%]">
              Saya berfokus pada pengembangan game menggunakan Unity serta
              membangun pengalaman gameplay yang menarik, immersive, dan
              optimal.
            </p>

            {/* BUTTON */}
            <div className="flex flex-wrap gap-5">
              <a
                href="#proyek"
                className="bg-[#00c2ff] border-4 border-black px-8 py-4 font-black uppercase rounded-2xl shadow-[6px_6px_0px_#000] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[2px_2px_0px_#000] hover:scale-105 transition-all"
              >
                Lihat Project
              </a>

              <a
                href="#kontak"
                className="bg-white border-4 border-black px-8 py-4 font-black uppercase rounded-2xl shadow-[6px_6px_0px_#000] hover:bg-yellow-300 hover:scale-105 transition-all"
              >
                Hubungi Saya
              </a>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-5 mt-14">
              <div className="bg-yellow-300 border-4 border-black rounded-3xl p-5 text-center shadow-[6px_6px_0px_#000] hover:-rotate-2 hover:-translate-y-2 transition-all duration-300">
                <h1 className="text-4xl font-black">3+</h1>
                <p className="font-bold uppercase">Project</p>
              </div>

              <div className="bg-[#00c2ff] border-4 border-black rounded-3xl p-5 text-center shadow-[6px_6px_0px_#000] hover:rotate-2 hover:-translate-y-2 transition-all duration-300">
                <h1 className="text-4xl font-black">1+</h1>
                <p className="font-bold uppercase">Tahun</p>
              </div>

              <div className="bg-green-400 border-4 border-black rounded-3xl p-5 text-center shadow-[6px_6px_0px_#000] hover:scale-105 hover:-translate-y-2 transition-all duration-300">
                <h1 className="text-2xl font-black uppercase">Unity</h1>
                <p className="font-bold uppercase">Dev</p>
              </div>
            </div>
          </div>

          {/* IMAGE */}
          <div
            className="relative flex justify-center animate-float"
            data-aos="zoom-in"
          >
            <div className="absolute top-6 left-6 w-[260px] sm:w-[350px] lg:w-[420px] h-full bg-pink-400 border-4 border-black rounded-[40px]" />

            <img
              src={DataImage.HeroImage}
              alt="Hero"
              className="relative z-10 w-[260px] sm:w-[350px] lg:w-[420px] rounded-[40px] border-4 border-black object-cover hover:-translate-x-3 hover:-translate-y-3 hover:rotate-2 transition-all duration-500"
            />

            {/* MINI STICKER */}
            <div className="absolute -bottom-6 -right-2 bg-yellow-300 border-4 border-black rounded-2xl px-4 py-2 font-black rotate-6 shadow-[6px_6px_0px_#000] animate-bounce hidden sm:block">
              GAME DEV 🎮
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="tentang" className="py-24">
          <div
            data-aos="fade-up"
            className="bg-white border-4 border-black rounded-[35px] p-8 lg:p-14 shadow-[10px_10px_0px_#000] relative hover:-translate-y-2 transition-all duration-300"
          >
            <div className="absolute -top-5 -right-5 bg-yellow-300 border-4 border-black px-5 py-2 font-black text-xl rotate-6 animate-wiggle">
              FUN FACT!
            </div>

            <div className="flex flex-col lg:flex-row gap-10">
              <div className="lg:w-1/3">
                <h1 className="text-5xl sm:text-6xl font-black uppercase leading-none">
                  Tentang
                  <span className="block bg-[#00c2ff] w-fit px-3 mt-3 border-b-[10px] border-black hover:scale-105 transition-all">
                    Saya
                  </span>
                </h1>
              </div>

              <div className="lg:w-2/3">
                <p className="bg-gray-100 border-4 border-black rounded-3xl p-6 font-semibold leading-relaxed text-lg hover:bg-yellow-100 transition-all duration-300">
                  Dari dulu saya memang punya ketertarikan besar di dunia
                  programming dan bikin game. Buat saya, game yang bagus itu
                  harus punya gameplay yang seru, sistem yang optimal, dan
                  visual yang immersive.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TOOLS */}
        <section className="py-24">
          <div className="text-center mb-16">
            <h1 className="inline-block bg-green-400 border-4 border-black px-6 py-3 text-5xl font-black uppercase rounded-3xl shadow-[8px_8px_0px_#000] -rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-300">
              Tools Stack
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {listTools.map((tool) => (
              <div
                key={tool.id}
                data-aos="zoom-in-up"
                className="group bg-white border-4 border-black rounded-[30px] p-6 shadow-[8px_8px_0px_#000] hover:-translate-y-3 hover:rotate-1 transition-all duration-300"
              >
                <div className="bg-gray-100 border-4 border-black rounded-2xl p-4 w-fit mb-5 group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
                  <img
                    src={tool.gambar}
                    alt="Tool"
                    className="w-14"
                  />
                </div>

                <h1 className="text-xl font-black uppercase mb-2">
                  {tool.nama}
                </h1>

                <p className="font-medium">{tool.ket}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECT */}
        <section id="proyek" className="py-24">
          <div className="text-center mb-16">
            <h1 className="inline-block bg-pink-400 border-4 border-black px-6 py-3 text-5xl font-black uppercase rounded-3xl shadow-[8px_8px_0px_#000] rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-300">
              My Projects
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {listProyek.map((proyek) => (
              <div
                key={proyek.id}
                data-aos="fade-up"
                className="group bg-white border-4 border-black rounded-[32px] overflow-hidden shadow-[8px_8px_0px_#000] hover:-translate-y-3 hover:rotate-1 transition-all duration-300 flex flex-col"
              >
                {/* IMAGE */}
                <div className="border-b-4 border-black bg-gray-200 overflow-hidden">
                  <img
                    src={proyek.gambar}
                    alt="Project"
                    className="w-full h-52 object-cover group-hover:scale-110 transition-all duration-500"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6 flex flex-col flex-grow">
                  <h1 className="text-2xl font-black uppercase mb-4 bg-yellow-300 border-4 border-black px-3 py-1 w-fit rounded-xl group-hover:rotate-1 transition-all duration-300">
                    {proyek.nama}
                  </h1>

                  <p className="font-medium leading-relaxed mb-6 flex-grow">
                    {proyek.desk}
                  </p>

                  {/* TAG */}
                  <div className="flex flex-wrap gap-2 mb-7">
                    {proyek.tools.map((tool, index) => (
                      <span
                        key={index}
                        className="px-3 py-2 bg-[#00c2ff] border-2 border-black rounded-xl font-bold text-sm shadow-[3px_3px_0px_#000] hover:-translate-y-1 transition-all"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* BUTTON */}
                  <a
                    href={proyek.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-white border-4 border-black rounded-2xl py-4 text-center font-black uppercase shadow-[6px_6px_0px_#000] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[2px_2px_0px_#000] hover:bg-[#222] transition-all"
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
          <div className="text-center mb-16">
            <h1 className="inline-block bg-[#00c2ff] border-4 border-black px-6 py-3 rounded-3xl text-5xl sm:text-6xl font-black uppercase shadow-[8px_8px_0px_#000] -rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-300">
              Hubungi Saya
            </h1>
          </div>

          <form
            action="https://formsubmit.co/romansaardanap@gmail.com"
            method="POST"
            data-aos="zoom-in"
            className="max-w-3xl mx-auto bg-yellow-300 border-4 border-black rounded-[35px] p-8 sm:p-12 shadow-[10px_10px_0px_#000] relative hover:-translate-y-2 transition-all duration-300"
          >
            <div className="absolute -top-6 -left-6 bg-pink-400 border-4 border-black w-20 h-20 rounded-full flex items-center justify-center text-3xl shadow-[6px_6px_0px_#000] rotate-12 animate-bounce">
              📩
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                name="nama"
                placeholder="NAMA LENGKAP"
                required
                className="bg-white border-4 border-black rounded-2xl p-4 font-bold outline-none shadow-[5px_5px_0px_#000] focus:bg-pink-200 focus:-translate-y-1 transition-all"
              />

              <input
                type="email"
                name="email"
                placeholder="EMAIL"
                required
                className="bg-white border-4 border-black rounded-2xl p-4 font-bold outline-none shadow-[5px_5px_0px_#000] focus:bg-blue-200 focus:-translate-y-1 transition-all"
              />
            </div>

            <textarea
              name="pesan"
              rows="7"
              placeholder="TULIS PESAN..."
              required
              className="w-full bg-white border-4 border-black rounded-2xl p-5 font-bold outline-none shadow-[5px_5px_0px_#000] focus:bg-green-200 focus:-translate-y-1 transition-all mb-8"
            />

            <button
              type="submit"
              className="w-full bg-black text-white border-4 border-black rounded-2xl py-5 font-black text-xl uppercase shadow-[8px_8px_0px_#000] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[2px_2px_0px_#000] hover:bg-[#222] transition-all"
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