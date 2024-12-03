import { createContext, useContext } from 'react';

interface NavContextProps {
  title: string;
  onUpdate?: (title: string) => void;
}

const NavContext = createContext<NavContextProps>({ title: '' });

const useNavContext = () => {
  const context = useContext(NavContext);

  if (!context) {
    throw new Error('useNavContext must be used within a NavProvider');
  }

  return context;
};

export default NavContext;
export { useNavContext, type NavContextProps };
