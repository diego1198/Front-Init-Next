import Link from "next/link";

interface DropDownItemProps {
  title: string;
  icon: string;
  href: string;
  handleClick?: () => void;
}

export const DropDownItem = ({
  href,
  icon,
  title,
  handleClick,
}: DropDownItemProps) => {
  return (
    <>
      <Link href={href}>
        <a className="dropdown-item" onClick={handleClick}>
          <i className={`icon ${icon}`} /> {title}
        </a>
      </Link>
      <div className="dropdown-divider"></div>
    </>
  );
};
