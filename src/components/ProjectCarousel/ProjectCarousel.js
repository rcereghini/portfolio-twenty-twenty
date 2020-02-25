import ReactDOM from "react-dom";
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import img from "../../assets/metal.jpg";
import { logDOM } from "@testing-library/react";
import "./projectCarousel.css";
import { EllipseCurve } from "three";

function Box(props) {
  const mesh = useRef();
  const [hovered, setHover] = useState(false);

  let rotateCap = 0;
  let clockwiseRotate = false;

  useFrame(() => {
    if (rotateCap >= 360) {
      clockwiseRotate = !clockwiseRotate;
      rotateCap = 0;
    }
    if (clockwiseRotate) {
      // mesh.current.rotation.y += 0.003;
      mesh.current.rotation.y += 0.01;
    } else {
      mesh.current.rotation.y -= 0.01;
      // mesh.current.rotation.y -= 0.003;
    }
    rotateCap++;
  });

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={
        props.boxKey === props.selectedBox.boxIdNumber ? [2, 2, 2] : [1, 1, 1]
      }
      onUpdate={self => {
        props.boxKey === props.selectedBox.boxIdNumber
          ? self.scale.set(2, 2, 2)
          : self.scale.set(1, 1, 1);
      }}
      onClick={e => {
        let sceneMeshes = e.object.parent.children.filter(sceneObject => {
          return sceneObject.type === "Mesh";
        });
        props.boxClickCallback(e, props.boxKey);
      }}
      onPointerOver={e => {
        props.boxHoverCallback(props.boxKey);
        setHover(true);
      }}
      onPointerOut={e => {
        props.boxHoverCallback();
        setHover(false);
      }}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial
        attach="material"
        color={
          hovered || props.boxKey === props.selectedBox.boxIdNumber
            ? "firebrick"
            : "orange"
        }
      />
    </mesh>
  );
}

const ProjectCarousel = props => {
  const [hoveredBoxId, setHoveredBoxId] = useState(-99);

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
                    selectedBox={props.selectedBox}
                    key={i + 1}
                    boxClickCallback={() => {
                      props.boxClickCallback(box);
                    }}
                    boxHoverCallback={providedId => {
                      if (providedId) setHoveredBoxId(providedId);
                      else setHoveredBoxId(-99);
                    }}
                    position={box.boxLocation}
                  />
                );
              })
            : null}
        </Canvas>
        <p>
          {hoveredBoxId && hoveredBoxId !== -99
            ? props.boxes[hoveredBoxId - 1].projectTitle
            : props.selectedBox.projectTitle}
        </p>
      </div>
    </div>
  );
};

export default ProjectCarousel;
