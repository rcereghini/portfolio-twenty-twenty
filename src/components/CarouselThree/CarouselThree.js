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

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [0.5, 0.5, 0.5] : [2, 2, 2]}
      onClick={e => setActive(!active)}
      onPointerOver={e => setHover(true)}
      onPointerOut={e => setHover(false)}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color={hovered ? "blue" : "red"}>
        {" "}
        <texture
          attach="map"
          image={img}
          onUpdate={self => img && (self.needsUpdate = true)}
        />
      </meshStandardMaterial>
    </mesh>
  );
}

const CarouselThree = () => {
  return (
    <div>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.8, 0, 0]} />
        <Box position={[1.8, 0, 0]} />
      </Canvas>
    </div>
  );
};

export default CarouselThree;
