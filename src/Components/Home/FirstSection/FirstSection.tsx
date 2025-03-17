import { motion } from "framer-motion";

export default function FirstSection() {
  const imageVariants = {
    initial: { x: 0 },
    animate: { x: [0, 20, 0], transition: { repeat: Infinity, duration: 3, ease: "easeInOut" } },
  };
  return (
    <div className="container d-flex justify-content-center align-items-center text-center">
      <div>
        <h1 className="fw-bold">
          <span className="text-lightt">01</span> <span>{"<"}</span>
          <span>Hello, I'm <span className="main-color">Rehab </span>!</span>
          <span>{">"}</span>
        </h1>
        <h2 className="fw-semibold">
        <span className="text-lightt">02</span> <span>{"<"}</span>
          I'm a front-end developer
          <span>{">"}</span>
        </h2>
        <h2 className="fw-semibold">
        <span className="text-lightt">03</span> <span>{"<"}</span>I design and develop
          web applications
          <span>{">"}</span>
        </h2>
        <div className=" text-start mt-5">
          <a className="main-color h4 text-decoration-none">About me {" >"}</a>
        </div>
      </div>
      <motion.div className="comp-img" variants={imageVariants} initial="initial" animate="animate">
        <img src="./images/comp.png" alt="computer" className="w-100" />
      </motion.div>

    </div>
  );
}
