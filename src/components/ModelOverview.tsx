import React, { useState } from "react";
import "./ModelOverview.scss";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Tree from "../3dmodels/Tree";

const rootClassName = "model-overview";

const data = [
  { title: "Show a tree", id: "tree" },
  { title: "Show a rock", id: "rock" },
  { title: "Show a house", id: "house" },
];

const ModelOverview = () => {
  const [selectedModel, setSelectedModel] = useState("");
  console.log(selectedModel);
  return (
    <div className={rootClassName}>
      <div className={`${rootClassName}--container`}>
        <div className={`${rootClassName}--container--left`}>
          {data.map((obj, i) => (
            <ul key={i} className={`${rootClassName}--container--list`}>
              <li
                key={i}
                className={`${rootClassName}--container--listItem`}
                onClick={() => setSelectedModel(obj.id)}
              >
                {obj.title}
              </li>
            </ul>
          ))}
        </div>
        <div className={`${rootClassName}--container--right`}>
          {selectedModel === "tree" && (
            <Canvas>
              <Stage environment="city" intensity={0.6}>
                <Tree />
              </Stage>

              <OrbitControls enableZoom={false} autoRotate />
            </Canvas>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModelOverview;
