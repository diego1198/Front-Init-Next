import Link from "next/link";
import { useState } from "react";

export interface itemProps {
  item: Iitem;
  index: number;
}

interface itemChildren {
  title: string;
  url: string;
}

interface Iitem {
  title: string;
  url: string;
  icon: string;
  children: itemChildren[];
  header: boolean;
}

export const Item = ({ item, index }: itemProps) => {
  const [collapse, setCollapse] = useState(false);

  const handleCollapse = () => setCollapse(!collapse);

  return (
    <li
      className={collapse ? "nav-dropdown active" : "nav-dropdown"}
      key={index}
    >
      <Link href={item.url}>
        <a
          className={item.children.length > 0 ? "has-arrow" : ""}
          aria-expanded="false"
          onClick={handleCollapse}
        >
          <i className={item.icon}></i>
          <span>{item.title}</span>
        </a>
      </Link>

      {item.children.length > 0 && (
        <ul
          className={collapse ? "nav-sub collapse in" : "nav-sub collapse"}
          aria-expanded="false"
        >
          {item.children.map((child, indexC) => (
            <li key={indexC}>
              <Link href={child.url}>
                <a>
                  <span>{child.title}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};
