import logo from "../assets/prome-logo.png";

function Navbar() {
  const navItems = ["About", "Skills", "Projects", "Experience", "Contact"];

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto mt-6 flex w-[min(1040px,calc(100%-56px))] items-center justify-between rounded-full border border-[#232329] bg-[rgba(10,10,11,0.78)] px-4 py-3 backdrop-blur-xl sm:px-5">
        <a href="#" className="flex min-w-0 items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#2A2A31] bg-[rgba(255,255,255,0.02)]">
            <img
              src={logo}
              alt="Prome logo"
              className="h-9 w-9 object-contain brightness-[2.8] contrast-[1.8] saturate-[1.2]"
            />
          </div>

          <div className="hidden sm:block">
            <p className="text-[14px] font-semibold tracking-[-0.02em] text-[#F8F5EE]">
              Zannatul Naima Prome
            </p>
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#AFA89B]">
              Software Portfolio
            </p>
          </div>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-[#C7BFB1] transition duration-300 hover:text-[#F8F5EE]"
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="rounded-full border border-[#C6A972]/35 bg-[#C6A972]/10 px-5 py-2.5 text-sm font-medium text-[#F8F5EE] transition duration-300 hover:-translate-y-0.5 hover:bg-[#C6A972] hover:text-[#09090B]"
        >
          Let&apos;s Talk
        </a>
      </nav>
    </header>
  );
}

export default Navbar;