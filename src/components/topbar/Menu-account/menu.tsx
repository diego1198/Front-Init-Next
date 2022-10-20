import Link from "next/link";
import { useDispatch } from "react-redux";
import { logout } from "../../../store/reducers/user.slice";
import { DropDownItem } from "./item";
import { UserCard } from "./user-card";

interface MenuProps {
  show: boolean;
  setShow: () => void;
}

export const Menu = ({ show, setShow }: MenuProps) => {
  const dispatch = useDispatch();
  
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <Link href={""}>
        <a
          className="nav-link nav-pill user-avatar"
          data-toggle="dropdown"
          role="button"
          aria-haspopup="true"
          aria-expanded="false"
          onClick={setShow}
        >
          <img
            src="/1.jpg"
            className="w-35 rounded-circle"
            alt="Albert Einstein"
          />
        </a>
      </Link>

      <div
        className={`dropdown-menu dropdown-menu-right dropdown-menu-accout ${
          show && "show"
        }`}
      >
        <UserCard rol="admin" username="Jonh Doe" />
        <DropDownItem href="" icon="dripicons-user" title="Pefil" />
        <DropDownItem
          href=""
          icon="dripicons-lock-open"
          title="Salir"
          handleClick={handleLogout}
        />
      </div>
    </>
  );
};
