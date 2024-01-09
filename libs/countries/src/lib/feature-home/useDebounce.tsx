import { useCallback } from 'react';

const useDebounce = () => {
  const debounce = useCallback((fn: (args?: any) => void, delay: number) => {
    let timeout: NodeJS.Timeout;
    return (...args: any) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => fn(...args), delay);
    };
  }, [])

  return debounce
};

export default useDebounce;
