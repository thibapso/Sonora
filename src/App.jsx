import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  return (
    <>
      <div className="bg-main">
        <header className="fixed top-0 left-0 w-full z-10 py-4 bg-main/90">
          <div className="max-w-[1340px] mx-auto px-4">
            <Navbar />
          </div>
        </header>

        <main className="pt-[64px]">
          <section className="flex items-center justify-center min-h-[70vh] max-w-[1300px] mx-auto px-4 font-inter">
            <Hero />
          </section>

          <section
            className="w-full bg-dark rounded-t-2xl flex items-center justify-center min-h-[75vh] px-4 md:px-8 lg:px-12 mt-12 font-inter"
            id="sobre"
          >
            <div className="w-full max-w-[900px] md:max-w-[1100px] lg:max-w-[1300px] mx-auto">
              <About />
            </div>
          </section>
        </main>
      </div>

      <footer className="bg-dark">
        <div className="max-w-[1340px] mx-auto px-4 py-6"></div>
      </footer>
    </>
  );
}

export default App;
