https://blog.logrocket.com/react-hooks-cheat-sheet-solutions-common-problems/

useMemo memoize values whereas in useCallback you can not.

useCallback gives you referential equality between renders for functions. And useMemo gives you referential equality between renders for values.

useEffect(() => {
  // I depend on everything, I'll run on every re-render
}); 

useEffect(() => {
  // I depend on nothing, I'll run just one time
}, []);

useEffect(() => {
  // I depend on state1, state2 and prop1
  // I'll run on every change of these dependencies
}, [state1, state2, prop1]);


// example Context object
const ThemeContext = React.createContext("dark");

// usage with context Consumer
function Button() {
  return <ThemeContext.Consumer>
        {theme => <button className={theme}> Amazing button </button>}
  </ThemeContext.Consumer>
}


// usage with useContext hook 
import {useContext} from 'react';

function ButtonHooks() {
 const theme = useContext(ThemeContext)
 return <button className={theme}>Amazing button</button>
}



# custom hooks LocalStorage

## setting and returning 2 properties

import { useState } from 'react';

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = value => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}

// Usage
const [name, setName] = useLocalStorage('name', 'John');



## useFetch
import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

// Usage
const { data, loading, error } = useFetch('https://api.example.com/data');