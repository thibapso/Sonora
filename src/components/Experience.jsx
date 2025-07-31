export default function Operation() {
  const topItems = [
    {
      icon: "heart.svg",
      title: "Personalizado para Você",
    },
    {
      icon: "spotify.svg",
      title: "Sincronizado com Spotify",
    },
  ];

  const bottomItems = [
    {
      icon: "search.svg",
      title: "Explore Novos Sons",
    },
    {
      icon: "stopwatch.svg",
      title: "Histórico de Moods",
    },
  ];

  return (
    <div className="w-full flex flex-col justify-between gap-6 px-4">
      {/* Primeiro bloco */}
      <div className="flex flex-col md:flex-row gap-6 w-full">
        {topItems.map(({ icon, title }) => (
          <div
            key={`top-${title}`}
            className="bg-light rounded-lg px-4 py-4 gap-4 flex items-center text-start w-full"
          >
            <div className="rounded-md bg-rose-100 w-14 h-14 flex items-center justify-center">
              <img
                className="w-6 h-6"
                src={`/assets/public/experience/${icon}`}
                alt={title}
              />
            </div>
            <div>
              <h4 className="font-semibold text-xs sm:text-base">{title}</h4>
            </div>
          </div>
        ))}
      </div>

      {/* Segundo bloco */}
      <div className="flex flex-col md:flex-row gap-6 w-full">
        {bottomItems.map(({ icon, title }) => (
          <div
            key={`bottom-${title}`}
            className="bg-light rounded-lg px-4 py-4 gap-4 flex items-center text-start w-full"
          >
            <div className="rounded-md bg-rose-100 w-14 h-14 flex items-center justify-center">
              <img
                className="w-6 h-6"
                src={`/assets/public/experience/${icon}`}
                alt={title}
              />
            </div>
            <div>
              <h4 className="font-semibold text-xs sm:text-base">{title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
