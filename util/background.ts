import { useEffect, useState } from 'react';

export const useRandomBackground = (defaultPath?: string) => {
  const [path, setPath] = useState(defaultPath ?? '');
  useEffect(() => {
    fetch('/api/background').then(res => res.text()).then(setPath);
  }, [])
  return path;
};
