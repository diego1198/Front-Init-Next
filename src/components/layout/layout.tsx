import Login from "../../pages/auth/login";
import { SideBar } from "../sidebar/sidebar";
import { TopBar } from "../topbar/topbar";
import { useLayout } from "./state/useLayout";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  const { isAuthenticated } = useLayout();

  return isAuthenticated ? (
    <div id="app">
      <SideBar />
      <div className="content-wrapper">
        <TopBar />
        <div className="content">{children}</div>
      </div>
    </div>
  ) : (
    <Login />
  );
};
