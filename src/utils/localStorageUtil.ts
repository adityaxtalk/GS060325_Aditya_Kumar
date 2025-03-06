export const localStorageUtil = {
    get<T>(key: string): T | null {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : null;
    },
  
    set<T>(key: string, value: T): void {
      localStorage.setItem(key, JSON.stringify(value));
    },
  
    remove(key: string): void {
      localStorage.removeItem(key);
    },
  };
  