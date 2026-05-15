const Footer = () => {
  const navLinks = [
    {
      name: "Beranda",
      link: "#beranda",
    },
    {
      name: "Tentang",
      link: "#tentang",
    },
    {
      name: "Proyek",
      link: "#proyek",
    },
    {
      name: "Kontak",
      link: "#kontak",
    },
  ];

  const socials = [
    {
      icon: "ri-github-fill",
      link: "https://github.com/Fichelle-App",
      bg: "bg-white",
    },
    {
      icon: "ri-instagram-fill",
      link: "https://instagram.com/rmn.arda_",
      bg: "bg-pink-400",
    },
    {
      icon: "ri-youtube-fill",
      link: "https://youtube.com/@ardakuahsoto",
      bg: "bg-red-400",
    },
  ];

  return (
    <footer className="relative mt-32 bg-[#ffde59] border-t-4 border-black overflow-hidden">
      {/* BACKGROUND PATTERN */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_2px,transparent_2px)] [background-size:24px_24px]" />

      {/* FLOATING SHAPES */}
      <div className="absolute top-10 left-10 w-16 h-16 bg-pink-400 border-4 border-black rounded-full animate-float hidden lg:block"></div>

      <div className="absolute bottom-10 right-10 w-20 h-20 bg-[#00c2ff] border-4 border-black rotate-12 animate-float2 hidden lg:block"></div>

      <div className="container relative z-10 mx-auto px-6 py-14">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* LEFT */}
          <div className="max-w-[320px] text-center lg:text-left">
            {/* LOGO */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-5 group">
              <div
                className="
                  w-16
                  h-16
                  bg-pink-400
                  border-4
                  border-black
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  text-3xl
                  shadow-[6px_6px_0px_#000]
                  rotate-[-6deg]
                  group-hover:rotate-6
                  group-hover:-translate-y-2
                  transition-all
                  duration-300
                "
              >
                🎮
              </div>

              <h1
                className="
                  text-5xl
                  font-black
                  text-black
                  tracking-tight
                  group-hover:tracking-wider
                  transition-all
                  duration-300
                "
              >
                ROMANSA.
              </h1>
            </div>

            <p
              className="
                text-black/80
                font-semibold
                leading-relaxed
                text-lg
                hover:text-black
                transition-all
                duration-300
              "
            >
              Programmer & Game Developer yang berfokus pada pengembangan game
              menggunakan Unity.
            </p>

            {/* BADGE */}
            <div
              className="
                inline-flex
    items-center
    gap-2
    mt-6
    bg-white
    border-4
    border-black
    rounded-2xl
    px-4
    py-2
    font-black
    text-black
    shadow-[5px_5px_0px_#000]
    rotate-[-2deg]
    hover:rotate-2
    hover:-translate-y-1
    transition-all
    duration-300
              "
            >
              🚀 OPEN FOR PROJECT
            </div>
          </div>

          {/* CENTER MENU */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {navLinks.map((item, index) => (
              <a
                key={item.name}
                href={item.link}
                className="
                  relative
                  min-w-[120px]
                  text-center
                  bg-white
                  border-4
                  border-black
                  rounded-2xl
                  px-6
                  py-3
                  text-black
                  font-black
                  uppercase
                  shadow-[5px_5px_0px_#000]
                  hover:translate-x-[3px]
                  hover:translate-y-[3px]
                  hover:shadow-[2px_2px_0px_#000]
                  hover:bg-pink-300
                  hover:rotate-1
                  transition-all
                  duration-300
                "
                style={{
                  animation: `floatMenu 3s ease-in-out infinite`,
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* RIGHT SOCIAL */}
          <div className="flex items-center gap-4">
            {socials.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  group
                  relative
                  w-16
                  h-16
                  ${item.bg}
                  border-4
                  border-black
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  text-black
                  shadow-[5px_5px_0px_#000]
                  hover:translate-x-[3px]
                  hover:translate-y-[3px]
                  hover:shadow-[2px_2px_0px_#000]
                  hover:rotate-6
                  hover:scale-110
                  transition-all
                  duration-300
                `}
                style={{
                  animation: `socialFloat 3s ease-in-out infinite`,
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                {/* PULSE */}
                <div className="absolute inset-0 rounded-2xl animate-ping bg-white/20"></div>

                <i
                  className={`${item.icon} ri-xl relative z-10 group-hover:scale-125 transition-all duration-300`}
                ></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
