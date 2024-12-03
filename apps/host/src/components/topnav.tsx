import { useNavContext } from 'shared';

export interface TopNavProps {
  title: string;
}

const TopNav = () => {
  const { title } = useNavContext();

  return (
    <nav className="topnav">
      <h1 className="title">{title}</h1>
    </nav>
  );
};

export default TopNav;
