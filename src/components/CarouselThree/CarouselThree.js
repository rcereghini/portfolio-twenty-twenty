import ReactDOM from "react-dom";
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import img from "../../assets/metal.jpg";
import { logDOM } from "@testing-library/react";

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  let rotateCap = 0;
  let clockwiseRotate = false;
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    if (rotateCap >= 150) {
      clockwiseRotate = !clockwiseRotate;
      rotateCap = 0;
    }
    if (clockwiseRotate) {
      mesh.current.rotation.y += 0.003;
    } else {
      mesh.current.rotation.y -= 0.003;
    }
    rotateCap++;
  });

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={e => setActive(!active)}
      onPointerOver={e => setHover(true)}
      onPointerOut={e => setHover(false)}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial
        attach="material"
        color={hovered ? "firebrick" : "orange"}
      />
    </mesh>
  );
}

const CarouselThree = () => {
  return (
    <div>
      <Canvas style={{ height: "400px" }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-4.8, 0, 0]} />
        <Box position={[0, 0, 2]} />
        <Box position={[4.8, 0, 0]} />
      </Canvas>
    </div>
  );
};

export default CarouselThree;
