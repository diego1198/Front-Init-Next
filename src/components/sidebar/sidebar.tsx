import menu from "../../shared/constants/menu/menu.json";
import { Header } from "./header";
import { Item } from "./item";

export const SideBar = () => {
  const menuL = menu.directory;
  return (
    <aside className="sidebar sidebar-left">
      <div className="sidebar-content">
        <div className="aside-toolbar">
          <ul className="site-logo">
            <li>
              <a>
                <div className="logo">
                  <img src="/icon.png" alt="" width="25" height="25" />
                </div>
                <span className="brand-text">SGC ARGOS</span>
              </a>
            </li>
          </ul>
          <ul className="header-controls">
            <li className="nav-item">
              <button
                type="button"
                className="btn btn-link btn-menu"
                data-toggle-state="mini-sidebar"
              >
                <i className="la la-dot-circle-o"></i>
              </button>
            </li>
          </ul>
        </div>
        <nav className="main-menu">
          <ul className="nav metismenu">
            {menuL.map((item, index) =>
              item.header ? (
                <Header title={item.title} key={index} />
              ) : (
                <Item {...{ item, index }} key={index} />
              )
            )}
          </ul>
        </nav>
      </div>
    </aside>
  );
};
