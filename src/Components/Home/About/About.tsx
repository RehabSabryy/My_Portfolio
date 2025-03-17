export default function About() {
  return (
    <div id="about" className="container d-flex flex-column flex-md-row justify-content-center align-items-center gap-4 py-5  border-bottom mb-5">
      <div className="w-25 text-center">
        <img
          src="./images/my-photo.jpg"
          alt="Personal Image"
          className="w-75 rounded-5 shadow-lg"
        />
      </div>
      {/* test  */}
      <div className="w-50 text-center text-md-start">
        <h2 className="fw-bold">Rehab Sabry</h2>
        <p className="mb-3">
          A passionate Front-End Developer specializing in building modern,
          user-friendly web applications. With a strong foundation in React.
          With a strong foundation in React.
        </p>
        <p>
          I focus on creating seamless user
          experiences with clean, efficient code.
        </p>
      </div>
    </div>
  );
}
