import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Box from "./Box";
import "./BoxOverview.scss";
import React from "react";

const rootClassName = "box-overview";

const BoxOverview = () => {
  return (
    <div className={rootClassName}>
      <div className={`${rootClassName}--container`}>
        <div className={`${rootClassName}--container--left`}>
          <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[3, 2, 1]} />
              <Box />
              <OrbitControls enableZoom={false} autoRotate />
            </Suspense>
          </Canvas>
        </div>
        <div className={`${rootClassName}--container--right`}>
          <h1 className={`${rootClassName}--container--right--h1`}>
            Think outside the box
          </h1>
        </div>
      </div>
    </div>
  );
};

export default BoxOverview;
