import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";

import Avatar from "./Avatar";
import Backdrop from "./Backdrop";
import CameraRig from "./CameraRig";

const CanvasModel = () => {
  return (
    <div className="w-screen h-screen bg-gradient-to-br from-pink-300 to-purple-500">
      <Canvas
        // color="FFC0CB"
        shadows
        camera={{ position: [0, 0, 0], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <ambientLight intensity={0.5} />
        <Environment preset="city" />

        <CameraRig>
          <Backdrop />
          <Center>
            <Avatar />
          </Center>
        </CameraRig>
      </Canvas>
    </div>
  );
};

export default CanvasModel;
