import "./Hero.scss";
import Navbar from "./Navbar";

const rootClassName = "hero";

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
          <img
            className={`${rootClassName}--container--right--img`}
            src="./img/moon.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
