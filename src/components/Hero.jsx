import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import { OrbitControls, Environment, Bounds } from "@react-three/drei";
import HeadphoneModel from "./HeadphoneModel";
import Button from "./Button";

function CenteredHeadphone(props) {
  return (
    <group position={[0, 0, 0]}>
      <HeadphoneModel {...props} position={[0, -0.6, 0]} />
    </group>
  );
}

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="text-light md:flex flex-row items-center justify-between rounded-md py-5 px-4 md:px-7 w-full md:w-[1300px] mx-auto">
      <div className="flex flex-col gap-6 items-center text-center md:items-start md:text-left">
        <div className="w-fit bg-glass backdrop-blur-sm border border-glass-stroke flex items-center gap-3 text-xl text-stone-700 font-semibold px-4 py-2 rounded-full mx-auto md:mx-0 select-none">
          <img
            src="images/hero/headphone.png"
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

      {/* Aqui entra o 3D */}
      <div
        className="flex justify-center w-full max-w-[600px] h-[600px]"
        style={{ cursor: isHovered ? "grab" : "default" }}
      >
        <Canvas
          camera={{ position: [0, 0, 9], fov: 50 }}
          onPointerOver={() => setIsHovered(true)}
          onPointerOut={() => setIsHovered(false)}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Environment preset="studio" />
          <OrbitControls
            enableZoom={false}
            autoRotate
            autoRotateSpeed={2}
            target={[0, 0, 0]}
          />

          <Bounds fit clip observe margin={1.5}>
            <CenteredHeadphone scale={6} />
          </Bounds>
        </Canvas>
      </div>
    </div>
  );
}
