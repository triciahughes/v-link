import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";
import RightArrowIcon from "../components/elements/RightArrowIcon";
import LeftArrowIcon from "../components/elements/LeftArrowIcon";

// import RightArrowIcon from "../assets/RightArrowIcon.png";

import Avatar from "./Avatar";
import Backdrop from "./Backdrop";
import CameraRig from "./CameraRig";

const CanvasModel = () => {
  return (
    <div className="w-screen h-screen bg-gradient-to-br from-pink-300 to-purple-500">
      <Canvas
        shadows
        camera={{ position: [0, 0, 0], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
        style={{ position: "absolute" }}
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
      <RightArrowIcon top="25%" />
      <RightArrowIcon top="50%" />
      <RightArrowIcon top="75%" />
      <LeftArrowIcon top="25%" />
      <LeftArrowIcon top="50%" />
      <LeftArrowIcon top="75%" />
    </div>
  );
};

export default CanvasModel;
