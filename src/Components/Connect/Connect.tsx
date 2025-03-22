export default function Connect() {
  return (
    <div id="contact" className="container mb-5 text-center mt-4">
      <p>
        If you'd like to collaborate, have any inquiries, or just want to say
        hello, feel free to reach out to me!
      </p>
      <p>
        📩 Email me at:{" "}
        <a
          href="mailto:rehab-sabry@outlook.com"
          className="secondary-color fw-bold"
        >
          rehab-sabry@outlook.com
        </a>
      </p>
      <div>
        <button className="btn yellow-second-btn" onClick={() => window.open("https://drive.google.com/file/d/1IWAF5FYTGxqFyAq5jWg-WUaX5eoDHJRn/view?usp=sharing")}>
          View CV 
        </button>
      </div>
    </div>
  );
}
