import { useState, useEffect, useRef } from 'react';

const useFetch = (url, options = {}, retries = 0) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const abortController = useRef(new AbortController());


  useEffect(() => {
    return () => {
      abortController.current.abort();
    };
  }, []);

  const fetchData = async (retryCount) => {
    try {
      setIsLoading(true);
      const response = await fetch(url, {
        ...options,
        signal: abortController.current.signal,
      });

      if (!response.ok) {
        throw new Error("Error de red ");
      }

      const result = await response.json();
      setData(result);
      setError(null);
    } catch (err) {
      if (err.name === 'AbortError') {
        console.log('Fetch aborted');
      } else if (retryCount < retries) {
        console.log(`Reconectando ..  (${retryCount + 1})`);
        fetchData(retryCount + 1); 
      } else {
        setError(err.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(0); 
  }, [url, options]); 

  return { data, isLoading, error };
};

export default useFetch;
