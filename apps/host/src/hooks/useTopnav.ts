import { useCallback, useMemo, useState } from 'react';
import { NavContextProps } from 'shared';

const useTopnav = (defaultTitle: string) => {
  const [state, setState] = useState<string>(defaultTitle);

  const handleUpdate = useCallback((title: string) => {
    setState(title);
  }, []);

  const context: NavContextProps = useMemo(
    () => ({
      title: state,
      onUpdate: handleUpdate,
    }),
    [handleUpdate, state],
  );

  return context;
};

export default useTopnav;
