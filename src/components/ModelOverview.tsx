import React from "react";
import "./ModelOverview.scss";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Tree from "../3dmodels/Tree";

const rootClassName = "model-overview";

const data = ["Show a tree", "Show a rock", "Show a house"];

const ModelOverview = () => {
  return (
    <div className={rootClassName}>
      <div className={`${rootClassName}--container`}>
        <div className={`${rootClassName}--container--left`}>
          {data.map((obj, i) => (
            <ul key={i} className={`${rootClassName}--container--list`}>
              <li key={i} className={`${rootClassName}--container--listItem`}>
                {obj}
              </li>
            </ul>
          ))}
        </div>
        <div className={`${rootClassName}--container--right`}>
          <Canvas>
            <Stage environment="city" intensity={0.6}>
              <Tree />
            </Stage>

            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default ModelOverview;
