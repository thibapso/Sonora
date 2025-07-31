export default function About() {
  return (
    <div className="text-white w-full max-w-[900px] md:max-w-[1100px] lg:max-w-[1300px] flex flex-col items-center py-14 px-4 md:px-8 lg:px-12">
      <div className="w-full max-w-[900px] text-center pt-2">
        <h3 className="text-2xl md:text-3xl font-semibold mb-2">
          Sinta a Música, Viva o Momento
        </h3>
        <p className="text-base md:text-lg text-neutral-300">
          Transformamos emoções em música, do seu jeito
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-[900px] mt-8">
        <div className="sm:col-span-2 lg:col-span-2 min-h-[208px] rounded-md overflow-hidden border border-glass-stroke">
          <img
            src="/assets/public/ouvindo.png"
            alt="Pessoa ouvindo música"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </div>

        <div className="min-h-[208px] rounded-md border border-glass-stroke flex justify-center items-center">
          <img
            className="w-24 h-24 duration-300 ease-in-out hover:scale-105"
            src="/assets/public/spotify.png"
            alt="spotify logo"
          />
        </div>

        <div className="min-h-[208px] rounded-md border border-glass-stroke flex justify-center items-center">
          <img
            className="w-24 h-24 duration-300 ease-in-out hover:scale-105"
            src="/assets/public/logo.svg"
            alt="sonora logo"
          />
        </div>

        <div className="sm:col-span-2 lg:col-span-2 min-h-[208px] rounded-md border border-glass-stroke flex justify-center items-center">
          <p className="font-thin text-center px-6 text-neutral-300 break-words">
            <i>
              “Sonora usa inteligência musical para transformar sentimentos em
              playlists personalizadas. Basta dizer como se sente e nós
              encontramos a trilha sonora perfeita para o seu momento.”
            </i>
          </p>
        </div>
      </div>
    </div>
  );
}
