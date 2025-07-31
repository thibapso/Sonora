export default function Operation() {
  return (
    <div className="w-full flex flex-col justify-between">
      <h3 className="text-center text-2xl md:text-3xl font-semibold mb-16">
        Uma Jornada Musical
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {[
          {
            icon: "girl.svg",
            title: "Selecione seu humor",
            desc: "Escolha o ícone que melhor representa seu estado de espírito. Diferentes emoções levam a novas descobertas musicais.",
          },
          {
            icon: "loadbar-sound.svg",
            title: "Descubra novas músicas",
            desc: "Com base no seu humor, receba playlists, artistas e músicas direto do Spotify.",
          },
          {
            icon: "music.svg",
            title: "Dê o play e aproveite",
            desc: "Ouça suas recomendações, explore novos artistas e salve suas faixas favoritas para qualquer momento.",
          },
        ].map(({ icon, title, desc }) => (
          <div
            key={title}
            className="bg-light rounded-lg px-6 py-4 flex flex-col items-start text-start max-w-[350px] w-full mx-auto h-full"
          >
            <div className="rounded-full bg-rose-100 w-14 h-14 flex items-center justify-center mb-4">
              <img className="w-6 h-6" src={`/operation/${icon}`} alt={title} />
            </div>
            <div>
              <h4 className="font-semibold mb-2">{title}</h4>
              <p className="text-sm text-zinc-700">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
