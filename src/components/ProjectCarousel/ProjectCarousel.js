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
  // const [active, setActive] = useState(false);
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
      scale={[1, 1, 1]}
      onClick={e => {
        let sceneMeshes = e.object.parent.children.filter(sceneObject => {
          return sceneObject.type === "Mesh";
        });

        sceneMeshes.forEach(mesh => {
          if (mesh.boxKey === e.object.boxKey) {
            mesh.scale.set(3, 3, 3);
          } else mesh.scale.set(1, 1, 1);
        });

        props.boxClickCallback(e);
      }}
      // onPointerOver={e => setHover(true)}
      // onPointerOut={e => setHover(false)}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial
        attach="material"
        color={hovered ? "firebrick" : "orange"}
      />
    </mesh>
  );
}

const ProjectCarousel = props => {
  return (
    <div>
      <Canvas style={{ height: "300px" }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {props.boxes
          ? props.boxes.map((box, i) => {
              return (
                <Box
                  boxKey={i + 1}
                  key={i + 1}
                  boxClickCallback={props.boxClickCallback}
                  position={box}
                />
              );
            })
          : null}
      </Canvas>
    </div>
  );
};

export default ProjectCarousel;
