import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <section className="relative w-full bg-main min-h-screen">
        <header className="fixed top-0 left-0 w-full z-10 py-4 bg-main/90 backdrop-blur-sm">
          <div className="max-w-[1340px] mx-auto px-4">
            <Navbar />
          </div>
        </header>

        {/* Espaço para evitar que conteúdo fique atrás da navbar fixa */}
        <div className="pt-[64px] max-w-[1300px] mx-auto px-4 font-inter">
          <section className="flex items-center justify-center min-h-screen">
            <Hero />
          </section>
        </div>
      </section>
      <section className="bg-dark">
        <p>aa</p>
      </section>

      <footer className="bg-dark">
        <div className="max-w-[1340px] mx-auto px-4 py-6"></div>
      </footer>
    </>
  );
}

export default App;
