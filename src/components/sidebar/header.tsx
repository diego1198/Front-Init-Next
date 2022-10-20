interface headerProps {
  title: string;
}

export const Header = ({ title }: headerProps) => {
  return (
    <li className="sidebar-header">
      <span>{title}</span>
    </li>
  );
};
