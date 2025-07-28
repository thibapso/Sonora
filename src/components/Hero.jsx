import Button from "./Button";

export default function Hero() {
  return (
    <div className="text-light md:flex flex-row items-center justify-between rounded-md py-5 px-4 md:px-7 w-full md:w-[1300px] mx-auto">
      <div className="flex flex-col gap-6 items-center text-center md:items-start md:text-left">
        <div className="w-fit bg-glass backdrop-blur-sm border border-glass-stroke flex items-center gap-3 text-xl text-stone-700 font-semibold px-4 py-2 rounded-full mx-auto md:mx-0">
          <img
            src="src/assets/public/headphone.png"
            alt="emoji de headphone"
            className="w-6 h-6"
          />
          <p>Sinta a vibe</p>
        </div>
        <h2 className="text-5xl text-stone-900 font-semibold max-w-[90%]">
          Descubra a trilha sonora do seu humor.
        </h2>
        <p className="text-2xl text-stone-700 font-thin max-w-[90%]">
          Diga como se sente e receba playlists personalizadas conectadas ao
          Spotify.
        </p>
        <Button
          title={
            <>
              Experimente
              <i className="ri-arrow-right-line ml-2" />
            </>
          }
          className="py-3 px-7 m-2 text-lg w-fit flex items-center mx-auto md:mx-0"
        />
      </div>
      <div className="flex justify-center">
        <img
          src="https://picsum.photos/900/800"
          alt="Imagem aleatória"
          className="w-full max-w-[450px] h-auto object-contain"
        />
      </div>
    </div>
  );
}
