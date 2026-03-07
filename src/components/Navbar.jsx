import { useState, useEffect } from "react";

const Navbar = ({ hidden = false }) => {
  // ⛔ Saat hidden, jangan render apa pun
  if (hidden) return null;

  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => setActive(window.scrollY > 150);
    handleScroll(); // init posisi saat mount
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar fixed top-0 left-0 w-full z-50 transition-all duration-300 ${active ? "py-4 bg-white/10 backdrop-blur-md" : "py-7 bg-transparent"}`}>
      <div className="flex items-center justify-between px-6 md:px-12">
        {/* Logo */}
        <div className="logo">
          <h1 className="text-3xl font-bold text-white p-1 md:bg-transparent md:text-white">
            Portofolio
          </h1>
        </div>

        {/* Menu */}
        <ul className="flex items-center gap-10">
          <li><a href="#home" className="sm:text-lg text-base font-medium text-white hover:text-gray-300 transition-colors">Home</a></li>
          <li><a href="#about" className="sm:text-lg text-base font-medium text-white hover:text-gray-300 transition-colors">About</a></li>
          <li><a href="#skills" className="sm:text-lg text-base font-medium text-white hover:text-gray-300 transition-colors">Skills</a></li>
          <li><a href="#certificates" className="sm:text-lg text-base font-medium text-white hover:text-gray-300 transition-colors">Certificates</a></li>
          <li><a href="#project" className="sm:text-lg text-base font-medium text-white hover:text-gray-300 transition-colors">Project</a></li>
          <li><a href="#contact" className="sm:text-lg text-base font-medium text-white hover:text-gray-300 transition-colors">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
