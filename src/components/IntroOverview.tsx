import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import "./IntroOverview.scss";
import Navbar from "./Navbar";
import React from "react";

const rootClassName = "intro-overview";

const IntroOverview = () => {
  return (
    <div className={rootClassName}>
      <Navbar />
      <div className={`${rootClassName}--container`}>
        <div className={`${rootClassName}--container--left`}>
          <h1 className={`${rootClassName}--container--left--h1`}>
            Think. Dream. Make.
          </h1>
        </div>
        <div className={`${rootClassName}--container--right`}>
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 10, 10]} scale={2.4}>
                <MeshDistortMaterial
                  color="#229eba"
                  attach="material"
                  distort={0.4}
                  speed={1}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          <img
            className={`${rootClassName}--container--right--img`}
            src="./img/cloud.png"
          />
        </div>
      </div>
    </div>
  );
};

export default IntroOverview;
