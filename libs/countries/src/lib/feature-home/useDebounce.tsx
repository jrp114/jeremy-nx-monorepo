import { useCallback } from 'react';

/**
 * Hook that debounces a function call by a given delay in ms
 * @returns debounce function
 */
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
