import ReactDOM from "react-dom";
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import img from "../../assets/metal.jpg";
import { logDOM } from "@testing-library/react";
import "./projectCarousel.css";

function Box(props) {
  const mesh = useRef();

  const [hovered, setHover] = useState(false);
  // const [active, setActive] = useState(false);
  let rotateCap = 0;
  let clockwiseRotate = false;

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
      scale={[2, 2, 2]}
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
    <div className="project-carousel-main">
      <div className="project-carousel-inner">
        <Canvas style={{ height: "100px" }}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          {props.boxes
            ? props.boxes.map((box, i) => {
                return (
                  <Box
                    boxKey={i + 1}
                    key={i + 1}
                    boxClickCallback={() => {
                      console.log("click!");
                      props.boxClickCallback(box);
                    }}
                    position={box.boxLocation}
                  />
                );
              })
            : null}
        </Canvas>
      </div>
    </div>
  );
};

export default ProjectCarousel;
