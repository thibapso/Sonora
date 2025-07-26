import Button from "./Button";

export default function Navbar() {
  return (
    <nav className="bg-glass backdrop-blur-sm border border-glass-stroke px-5 py-5 flex justify-between items-center w-full h-14 rounded-lg">
      <a href="#" className="flex gap-1 items-center">
        <img className="w-6 h-6" src="src/assets/public/logo.svg" alt="" />
        <h1 className="text-2xl text-light hover:text-stone-100 cursor-pointer font-bold tracking-wide">
          Sonora
        </h1>
      </a>

      <ul className="hidden md:flex gap-6 text-base font-medium">
        <li className="text-light hover:text-stone-100 cursor-pointer transition-colors">
          Sobre
        </li>
        <li className="text-light hover:text-stone-100 cursor-pointer transition-colors">
          Funcionamento
        </li>
        <li className="text-light hover:text-stone-100 cursor-pointer transition-colors">
          Experiência
        </li>
      </ul>

      <Button title="Entrar"></Button>
    </nav>
  );
}
