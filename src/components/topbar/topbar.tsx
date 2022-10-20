import Link from "next/link";
import { useState } from "react";
import { Menu } from "./Menu-account/menu";
import { Notificactions } from "./Notifications/notifications";

export const TopBar = () => {

  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleShow = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav className="top-toolbar navbar navbar-mobile navbar-tablet">
        <ul className="navbar-nav nav-left">
          <li className="nav-item">
            <a data-toggle-state="aside-left-open">
              <i className="icon dripicons-align-left"></i>
            </a>
          </li>
        </ul>
        <ul className="navbar-nav nav-center site-logo">
          <li>
            <a href="?module=dashboard">
              <div className="logo_mobile">
                <img src="/icon.png" alt="" width="25" height="25" />
              </div>
              <span className="brand-text">SGC ARGOS</span>
            </a>
          </li>
        </ul>
        <ul className="navbar-nav nav-right">
          <li className="nav-item">
            <Link href={""}>
              <a data-toggle-state="mobile-topbar-toggle" onClick={handleShow}>
                <i className="icon dripicons-dots-3 rotate-90"></i>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      <nav className="top-toolbar navbar navbar-desktop flex-nowrap">
        <div className="container">SISTEMA DE GESTIÓN DE COBRANZAS ARGOS</div>
        <ul className="navbar-nav nav-right">
          <li className="nav-item dropdown dropdown-notifications dropdown-menu-lg">
            <Notificactions />
          </li>
          <li className="nav-item dropdown">
            <Menu show={showMenu} setShow={handleShow}/>
          </li>
        </ul>
      </nav>
    </>
  );
};
