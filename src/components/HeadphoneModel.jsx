import { useGLTF } from "@react-three/drei";

export default function HeadphoneModel(props) {
  const gltf = useGLTF("/models/bose_qc35.glb");

  return <primitive object={gltf.scene} {...props} />;
}
