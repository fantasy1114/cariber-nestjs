import Link from "next/link";
import { useEffect, useState } from "react";
import Img from "./image"
import UserManager from "../auth/userManager"
import Popup from "reactjs-popup";
import FlashMessages, { FlashMessagesType } from "../functions/flashMessages";
import Login from "./login";

interface Menu {
  url: string,
  name: string
}

export default function Header() {
  const userManager = new UserManager()
  const flashMessages = new FlashMessages()
  const [hamburgerOpened, setHamburgerOpened] = useState(false);
  const flashForgotPassword = flashMessages.getMessages(FlashMessagesType.forgotPasswordMessages)

  const menuLogedIn: Menu[] = [
    { url: "/library", name: "คอร์สของฉัน" },
    { url: "/courses", name: "คอร์สทั้งหมด" },
    { url: "https://blog.cariber.co/", name: "บทความ" },
    { url: "/reviews", name: "รีวิว" },
  ];

  const menu: Menu[] = [
    { url: "/courses", name: "คอร์สทั้งหมด" },
    { url: "https://blog.cariber.co/", name: "บทความ" },
    { url: "/reviews", name: "รีวิว" },
  ];

  const menuUser: Menu[] = [
    { url: "/library", name: "คอร์สของฉัน" },
    { url: "/account", name: "การตั้งค่า" },
    { url: "/logout", name: "ออกจากระบบ" },
  ];

  const menuUserMobile: Menu[] = [
    { url: "/account", name: "การตั้งค่า" },
    { url: "/logout", name: "ออกจากระบบ" },
  ];

  useEffect(() => {
    window.addEventListener("resize", () => {
      setHamburgerOpened(false)
    });
  })

  function switchHamburger() {
    setHamburgerOpened(!hamburgerOpened)
  }

  return (
    <header className="header">
      {flashForgotPassword && (
        <div className="header-changed-password">
          <div className="row">
            <span className="fa fa-check-circle w-18 h-18"></span>
            <p className="m-0">
              &nbsp;
              {flashForgotPassword}
            </p>
          </div >
        </div >
      )}
      <div className="header-wrap">
        <div className="header-content header-content-desktop background-dark">
          <div className="container header-container media h-44">
            <Link href="/" >
              <a className="logo w-120 h-42">
                <Img className="logo-image"
                  src="/header/header-logo.png"
                  width={120}
                  height={41.8833}
                  alt="Header Logo"
                />
              </a>
            </Link>
            <div className="header-block header-switch-content header-block-menu media-body">
              <div className="link-list justify-content-right">
                {userManager.isLoggedIn() ? (
                  <div>
                    {menuLogedIn.map((value, index) => {
                      return (
                        <a key={index} className="link-list-link" href={value.url}>
                          {value.name}
                        </a>
                      )
                    })}
                  </div>) : (
                  <div>
                    {menu.map((value, index) => {
                      return (
                        <a key={index} className="link-list-link" href={value.url}>
                          {value.name}
                        </a>
                      )
                    })}
                  </div>
                )}

              </div>
            </div>
            <div className="header-block header-switch-content header-block-cta">
              <a className="btn btn-small btn-full"
                href="https://checkout.cariber.co?add-to-cart=685&cfp=eWVhcmx5YmFubm5lcl9kZXNrdG9wX0M6L1VzZXJzL2luemVlL09uZURyaXZlJTIwLSUyMFVuaXZlcnNpdHklMjBvZiUyMFBoYXlhby9DYXJpYmVyJTIwZG91Y3VtZW50L3NhdmUlMjBwYWdlLyVFMCVCOCU4NCVFMCVCOCVBRCVFMCVCOCVBMyVFMCVCOSU4QyVFMCVCOCVBQSVFMCVCOCVBRCVFMCVCOCVBRCVFMCVCOCU5OSVFMCVCOSU4NCVFMCVCOCVBNSVFMCVCOCU5OSVFMCVCOSU4QyVFMCVCOCU4MSVFMCVCOCVCMSVFMCVCOCU5QSVFMCVCOCU4QiVFMCVCOCVCNCVFMCVCOSU4MiVFMCVCOCU4MSVFMCVCOSU4OSUyMCVFMCVCOSU4MCVFMCVCOCU4MSVFMCVCOCVCNSVFMCVCOCVBMiVFMCVCOCVBMyVFMCVCOCU5NSVFMCVCOCVCNCVFMCVCOCVBOCVFMCVCOCVCMSVFMCVCOCU4MSVFMCVCOCU5NCVFMCVCOCVCNCVFMCVCOSU4QyUyMCVFMCVCOSU4MCVFMCVCOCVBQSVFMCVCOCU5OSVFMCVCOCVCMiVFMCVCOSU4MCVFMCVCOCVBMSVFMCVCOCVCNyVFMCVCOCVBRCVFMCVCOCU4NyUyMEtpYXRpc3VrJTIwU2VuYW11YW5nLmh0bWw=">
                ซื้อแพ็กเกจรายปี
              </a>
            </div>
            {userManager.isLoggedIn() ? (
              <div className="header-block header-switch-content header-block-user header-block-mr0">
                <div className="user-avatar-block">
                  <Popup trigger={<div>
                    <Img className="user-avatar"
                      src={"/default_avatar.webp"}
                      width={40}
                      height={40}
                      alt="default_avatar.webp" />
                  </div>}
                    position="bottom right"
                    on="click"
                    closeOnDocumentClick
                    mouseLeaveDelay={300}
                    mouseEnterDelay={0}
                    contentStyle={{ padding: "0px", border: "none" }}
                    arrow={false}>
                    <div className="menu">
                      {menuUser.map((value, index) => {
                        return (
                          <a key={index} href={value.url} className="menu-item">
                            {value.name}
                          </a>
                        )
                      })}
                    </div>
                  </Popup>
                </div>
              </div>
            ) : (
              <div className="header-block header-switch-content header-block-user header-block-mr0">
                <div className="user">
                  <span className="user-login">
                    <Login />
                  </span>
                </div>
              </div>
            )}
            <div className={`hamburger hidden-desktop ${hamburgerOpened && "hamburger-opened"}`} onClick={switchHamburger}>
              <div className="hamburger-slices">
                <div className="hamburger-slice hamburger-slice-1"></div>
                <div className="hamburger-slice hamburger-slice-2"></div>
                <div className="hamburger-slice hamburger-slice-3"></div>
                <div className="hamburger-slice hamburger-slice-4"></div>
              </div>
            </div>
          </div>
        </div>
        <div className={`header-content header-content-mobile background-dark ${hamburgerOpened ? "d-block" : "d-none"}`}>
          <div className="header-block header-switch-content header-block-menu">
            {userManager.isLoggedIn() ? (
              <div className="link-list">
                {menuLogedIn.map((value, index) => {
                  return (
                    <a key={index} className="link-list-link" href={value.url}>
                      {value.name}
                    </a>
                  )
                })}
              </div>
            ) : (
              <div className="link-list">
                {menu.map((value, index) => {
                  return (
                    <a key={index} className="link-list-link" href={value.url}>
                      {value.name}
                    </a>
                  )
                })}
              </div>
            )}
            <div className="header-block header-switch-content header-block-cta">
              <a className="btn btn-small btn-full"
                href="https://checkout.cariber.co?add-to-cart=685&cfp=eWVhcmx5YmFubm5lcl9kZXNrdG9wX0M6L1VzZXJzL2luemVlL09uZURyaXZlJTIwLSUyMFVuaXZlcnNpdHklMjBvZiUyMFBoYXlhby9DYXJpYmVyJTIwZG91Y3VtZW50L3NhdmUlMjBwYWdlLyVFMCVCOCU4NCVFMCVCOCVBRCVFMCVCOCVBMyVFMCVCOSU4QyVFMCVCOCVBQSVFMCVCOCVBRCVFMCVCOCVBRCVFMCVCOCU5OSVFMCVCOSU4NCVFMCVCOCVBNSVFMCVCOCU5OSVFMCVCOSU4QyVFMCVCOCU4MSVFMCVCOCVCMSVFMCVCOCU5QSVFMCVCOCU4QiVFMCVCOCVCNCVFMCVCOSU4MiVFMCVCOCU4MSVFMCVCOSU4OSUyMCVFMCVCOSU4MCVFMCVCOCU4MSVFMCVCOCVCNSVFMCVCOCVBMiVFMCVCOCVBMyVFMCVCOCU5NSVFMCVCOCVCNCVFMCVCOCVBOCVFMCVCOCVCMSVFMCVCOCU4MSVFMCVCOCU5NCVFMCVCOCVCNCVFMCVCOSU4QyUyMCVFMCVCOSU4MCVFMCVCOCVBQSVFMCVCOCU5OSVFMCVCOCVCMiVFMCVCOSU4MCVFMCVCOCVBMSVFMCVCOCVCNyVFMCVCOCVBRCVFMCVCOCU4NyUyMEtpYXRpc3VrJTIwU2VuYW11YW5nLmh0bWw=">
                ซื้อแพ็กเกจรายปี
              </a>
            </div>
            {userManager.isLoggedIn() ? (
              <div className="header-block header-switch-content header-block-menu">
                <span className="link-list">
                  {menuUserMobile.map((value, index) => {
                    return (
                      <a key={index} className="link-list-link" href={value.url}>
                        {value.name}
                      </a>
                    )
                  })}
                </span>
              </div>
            ) : (
              <div className="header-block header-switch-content header-block-user">
                <span className="user-login">
                  <Login />
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </header >
  )
}