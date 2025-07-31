import Button from "./Button";

export default function Navbar() {
  return (
    <div className="bg-glass backdrop-blur-md border border-glass-stroke px-5 py-5 flex justify-between items-center w-full h-14 rounded-lg">
      <a
        href="#"
        className="flex gap-1 items-center transition-transform duration-300 ease-in-out hover:scale-105"
      >
        <img
          className="w-6 h-6"
          src="/assets/public/logo.svg"
          alt="sonora logo"
        />
        <h1 className="font-sora text-2xl text-light hover:text-stone-100 cursor-pointer font-bold tracking-wide">
          Sonora
        </h1>
      </a>

      <ul className="hidden md:flex gap-6 text-base font-medium">
        <li>
          <a
            className="text-light hover:text-stone-100 cursor-pointer transition-colors"
            href="#sobre"
          >
            Sobre
          </a>
        </li>
        <li>
          <a
            className="text-light hover:text-stone-100 cursor-pointer transition-colors"
            href="#funcionamento"
          >
            Funcionamento
          </a>
        </li>
        <li>
          <a
            className="text-light hover:text-stone-100 cursor-pointer transition-colors"
            href="#experiencia"
          >
            Experiência
          </a>
        </li>
      </ul>

      <Button title="Entrar"></Button>
    </div>
  );
}
