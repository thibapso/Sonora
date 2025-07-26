import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <section className="h-screen w-full bg-main">
        <header className="fixed top-0 left-0 w-full z-10 py-4">
          <div className="max-w-[1340px] mx-auto px-4">
            <Navbar />
          </div>
        </header>

        <main className="max-w-[1300px] mx-auto px-4 pt-24">
          <h2 className="text-2xl font-semibold">Bem-vindo ao Sonora!</h2>
        </main>
      </section>
      <section className="bg-white">
        <div className="max-w-[1340px] mx-auto px-4 py-12">
          <p className="text-lg">
            Aqui começa o conteúdo com fundo branco, após o scroll.
          </p>
        </div>
      </section>
      <footer className="bg-white">
        <div className="max-w-[1340px] mx-auto px-4 py-6"></div>
      </footer>
    </>
  );
}

export default App;
