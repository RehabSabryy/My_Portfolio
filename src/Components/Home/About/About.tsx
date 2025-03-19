import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      id="about"
      className="container d-flex flex-column flex-md-row justify-content-center align-items-center gap-4 py-5 border-bottom mb-5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* Image Animation */}
      <motion.div
        className="w-25 text-center"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <img
          src="./images/my-photo.jpg"
          alt="Personal Image"
          className="w-75 rounded-5 shadow-lg"
        />
      </motion.div>

      {/* Text Animation */}
      <motion.div
        className="w-50 text-center text-md-start"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <h2 className="fw-bold">Rehab Sabry</h2>
        <p className="mb-3">
          A passionate Front-End Developer specializing in building modern,
          user-friendly web applications. With a strong foundation in React.
        </p>
        <p>
          I focus on creating seamless user experiences with clean, efficient code.
        </p>
      </motion.div>
    </motion.div>
  );
}
