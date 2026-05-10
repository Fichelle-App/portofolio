import { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    {
      id: 1,
      name: "Beranda",
      link: "#beranda",
    },
    {
      id: 2,
      name: "Tentang",
      link: "#tentang",
    },
    {
      id: 3,
      name: "Proyek",
      link: "#proyek",
    },
    {
      id: 4,
      name: "Kontak",
      link: "#kontak",
    },
  ];

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          active
            ? "py-4 bg-zinc-950/70 backdrop-blur-xl border-b border-zinc-800 shadow-lg shadow-black/20"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* LOGO */}
          <div className="logo">
            <a
              href="#beranda"
              className="text-2xl md:text-3xl font-black tracking-wide"
            >
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
                Portofolio
              </span>
            </a>
          </div>

          {/* MENU DESKTOP */}
          <ul className="hidden md:flex items-center gap-3 bg-zinc-900/40 border border-zinc-800 backdrop-blur-xl px-3 py-3 rounded-full">
            {navLinks.map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  className="px-5 py-3 rounded-full text-zinc-300 hover:text-white hover:bg-violet-600/20 transition-all duration-300 font-medium"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* BUTTON CONTACT */}
          <div className="hidden md:block">
            <a
              href="#kontak"
              className="bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-violet-700/20"
            >
              Let&apos;s Talk
            </a>
          </div>

          {/* HAMBURGER */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setOpenMenu(!openMenu)}
          >
            {openMenu ? (
              <i className="ri-close-line"></i>
            ) : (
              <i className="ri-menu-4-line"></i>
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 w-[75%] h-screen bg-zinc-950/95 backdrop-blur-xl z-40 border-l border-zinc-800 transform transition-all duration-500 md:hidden ${
          openMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-start gap-6 p-10 mt-24">
          {navLinks.map((item) => (
            <a
              key={item.id}
              href={item.link}
              onClick={() => setOpenMenu(false)}
              className="text-2xl font-semibold text-zinc-300 hover:text-violet-400 transition-all duration-300"
            >
              {item.name}
            </a>
          ))}

          <a
            href="#kontak"
            onClick={() => setOpenMenu(false)}
            className="mt-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-4 rounded-2xl font-semibold w-full text-center"
          >
            Hubungi Saya
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;