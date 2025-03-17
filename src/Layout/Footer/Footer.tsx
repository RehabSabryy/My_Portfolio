
export default function Footer() {
  return (
    <footer className="text-center container-fluid border-top">
        <div className="text-center mt-5">
          <img src="./images/website_logo.png" alt="RS Logo" className="footer-logo"/>
        </div>
        <div className="social-media d-flex justify-content-center gap-3 align-items-center">
          <a className="link-hover" target="_blank" href="https://www.linkedin.com/in/rehab-sabry-08a864275/"> LinkedIn</a>
          <a className="link-hover" target="_blank" href="https://github.com/RehabSabryy">GitHub</a>
          <a className="link-hover" target="_blank" href="https://www.behance.net/rehabsabryy">Behance</a>
        </div>
      <div className="text-center p-4">
        <p className="text-reset">© 2025 Rehab Sabry</p>
      </div>
    </footer>
  )
}
