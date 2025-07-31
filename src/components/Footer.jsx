export default function Footer() {
  return (
    <div className="text-white w-full max-w-[1300px] flex flex-col items-center py-4 px-4 md:px-8 lg:px-12">
      <div className="flex w-full flex-col md:flex-row items-center justify-between gap-6">
        <a
          href="#"
          className="flex gap-1 items-center transition-transform duration-300 ease-in-out hover:scale-105"
        >
          <img
            className="w-6 h-6"
            src="/logo.svg"
            alt="sonora logo"
          />
          <h4 className="font-sora text-2xl text-light hover:text-stone-100 cursor-pointer font-bold tracking-wide">
            Sonora
          </h4>
        </a>

        <ul className="flex flex-col md:flex-row gap-4 md:gap-6 items-center text-sm md:text-base">
          {["Sobre", "Funcionamento", "Experiência"].map((item, idx) => (
            <li key={idx}>
              <a
                href={`#${item.toLowerCase()}`}
                className="relative pb-1 text-light hover:text-white transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white hover:after:w-full after:transition-all after:duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <hr className="w-full border-t border-white opacity-30 my-8" />
      <p className="text-sm md:text-base">Sonora {new Date().getFullYear()}</p>
    </div>
  );
}
