import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import "./IntroOverview.scss";
import Navbar from "./Navbar";
import React from "react";

const rootClassName = "intro-overview";

const Hero = () => {
  return (
    <div className={rootClassName}>
      <Navbar />
      <div className={`${rootClassName}--container`}>
        <div className={`${rootClassName}--container--left`}>
          <h1 className={`${rootClassName}--container--left--h1`}>
            Think. Make. Solve.
          </h1>
          <div className={`${rootClassName}--container--left--info`}>
            <img
              className={`${rootClassName}--container--left--line`}
              src="./img/line.png"
            />
            <h2 className={`${rootClassName}--container--left--h2`}>
              What we do
            </h2>
          </div>
          <p className={`${rootClassName}--container--left--text`}>
            We create alot of stuffff
          </p>
          <button className={`${rootClassName}--container--left--button`}>
            Learn More
          </button>
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

export default Hero;
