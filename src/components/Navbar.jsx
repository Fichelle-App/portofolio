import { useEffect, useState } from "react";

const navLinks = [
  {
    id: 1,
    name: "Beranda",
    link: "#beranda",
    color: "hover:bg-[#fb64b6]",
  },
  {
    id: 2,
    name: "Tentang",
    link: "#tentang",
    color: "hover:bg-[#00c2ff]",
  },
  {
    id: 3,
    name: "Project",
    link: "#proyek",
    color: "hover:bg-[#05df72]",
  },
  {
    id: 4,
    name: "Kontak",
    link: "#kontak",
    color: "hover:bg-[#ffdf20]",
  },
];

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = openMenu ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openMenu]);

  const closeMenu = () => setOpenMenu(false);

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 animate-[slideDown_0.6s_ease] ${
          active
            ? "py-4 bg-[#ffde59]/95 backdrop-blur-md border-b-4 border-black shadow-[0_6px_0px_#000]"
            : "py-5"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between gap-4">
            {/* LOGO */}
            <a
              href="#beranda"
              className="group flex items-center gap-3 text-2xl sm:text-3xl font-black tracking-tight text-black whitespace-nowrap transition-all duration-300 hover:scale-105"
            >
              <div className="w-11 h-11 bg-pink-400 border-4 border-black rounded-xl flex items-center justify-center shadow-[4px_4px_0px_#000] rotate-[-6deg] group-hover:rotate-6 group-hover:-translate-y-1 transition-all duration-300">
                🎮
              </div>

              <span className="group-hover:tracking-wider transition-all duration-300">
                ROMANSA.
              </span>
            </a>

            {/* DESKTOP NAV */}
            <div className="hidden lg:flex items-center gap-4">
              <ul className="flex items-center gap-2 bg-white border-4 border-black rounded-2xl px-3 py-3 shadow-[6px_6px_0px_#000]">
                {navLinks.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className={`group relative px-5 py-3 rounded-xl border-4 border-transparent font-bold text-black transition-all duration-300 whitespace-nowrap hover:border-black hover:-translate-y-1 ${item.color}`}
                    >
                      {item.name}

                      <span className="absolute left-1/2 -translate-x-1/2 bottom-1 w-0 h-[3px] bg-black transition-all duration-300 group-hover:w-4/5" />
                    </a>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#kontak"
                className="neo-button bg-[#00c2ff] text-black px-6 py-3 font-black whitespace-nowrap hover:scale-105 animate-pulse"
              >
                Let&apos;s Talk
              </a>
            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setOpenMenu(!openMenu)}
              className={`lg:hidden w-12 h-12 flex items-center justify-center text-2xl text-black bg-white border-4 border-black rounded-xl shadow-[4px_4px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_#000] transition-all duration-300 hover:rotate-6 ${
                openMenu ? "rotate-90 scale-95" : ""
              }`}
            >
              {openMenu ? (
                <i className="ri-close-line"></i>
              ) : (
                <i className="ri-menu-4-line"></i>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* OVERLAY */}
      <div
        onClick={closeMenu}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-[3px] transition-all duration-300 lg:hidden ${
          openMenu ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* MOBILE MENU */}
      <aside
        className={`fixed top-0 right-0 z-50 w-[78%] sm:w-[60%] h-screen bg-[#ffde59] border-l-4 border-black shadow-[-8px_0px_0px_#000] transition-all duration-500 lg:hidden ${
          openMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* MOBILE HEADER */}
        <div className="flex items-center justify-between p-6 border-b-4 border-black">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-pink-400 border-4 border-black rounded-xl flex items-center justify-center text-xl shadow-[4px_4px_0px_#000] rotate-[-6deg] animate-bounce">
              🎮
            </div>

            <h1 className="text-2xl font-black text-black">MENU</h1>
          </div>

          <button
            onClick={closeMenu}
            className="w-11 h-11 flex items-center justify-center bg-white border-4 border-black rounded-xl text-xl text-black shadow-[4px_4px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_#000] hover:rotate-12 transition-all"
          >
            <i className="ri-close-line"></i>
          </button>
        </div>

        {/* MENU ITEMS */}
        <div className="flex flex-col gap-5 p-6">
          {navLinks.map((item, index) => (
            <a
              key={item.id}
              href={item.link}
              onClick={closeMenu}
              className={`bg-white border-4 border-black rounded-2xl px-5 py-4 font-bold text-black shadow-[5px_5px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000] transition-all duration-300 ${item.color}`}
              style={{
                animation: `slideLeft 0.4s ease forwards`,
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {item.name}
            </a>
          ))}

          {/* MOBILE CTA */}
          <a
            href="#kontak"
            onClick={closeMenu}
            className="mt-2 bg-[#00c2ff] border-4 border-black rounded-2xl px-5 py-4 text-center font-black uppercase text-black shadow-[5px_5px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000] hover:scale-[1.02] transition-all duration-300 animate-pulse"
          >
            Let&apos;s Talk
          </a>
        </div>
      </aside>
    </>
  );
};

export default Navbar;