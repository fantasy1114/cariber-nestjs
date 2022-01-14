import Link from "next/link"
import Img from "./image"

export default function Footer() {
  return (
    <div>
      <div id="section-footer">
        <footer className="footer background-dark">
          <div className="footer-content">
            <div className="container footer-container media">
              <div className="footer-block ">
                <Link href="/">
                <a className="logo" style={{ width: 40, height: 39.9667 }}>
                  <Img className="logo-image"
                    src="/footer/footer-logo.jpg"
                    alt="Footer Logo"
                    width={40}
                    height={39.9667} />
                </a>
                </Link>
              </div>
              <div className="footer-block ">
                <span>
                  © 2021 CARIBER
                </span>
              </div>
              <div className="footer-block media-body">
                <div className="link-list justify-content-right">
                  <Link href="/#">
                    <a className="link-list-link">
                      นโยบายความเป็นส่วนตัว
                    </a>
                  </Link>
                  <Link href="/terms-conditions">
                    <a className="link-list-link">
                      เงื่อนไขการใช้งาน
                    </a>
                  </Link>
                  <span className="link-list-link">
                    Tel. 095-754-7424
                  </span>
                  <span className="link-list-link">
                    contact@cariber.co
                  </span>
                </div>
              </div>
              <div className="footer-block ">
                <div className="social-icons social-icons-">
                  <a className="social-icons-icon" href="https://www.facebook.com/cariberofficial">
                    <i aria-hidden className="fab fa-facebook-f" />
                  </a>
                  <a className="social-icons-icon" href="https://www.instagram.com/cariber.official/">
                    <i aria-hidden className="fab fa-instagram" />
                  </a>
                  <a className="social-icons-icon" href="https://www.linkedin.com/company/cariber/">
                    <i aria-hidden className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}