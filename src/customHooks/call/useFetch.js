import { useState, useEffect, useRef } from 'react';

export const useFetch = (url, options = {}, body = null, token = null, retries = 0) => {
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

      // Agregamos el Bearer token si está presente
      const fetchOptions = {
        ...options,
        signal: abortController.current.signal,
        headers: {
          'Content-Type': 'application/json',
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
          ...(options.headers || {}),
        },
        body: body ? JSON.stringify(body) : null,
      };


      const hasAtLeastOneField = Object.values(body).some(field => field.trim() !== '');

      if (!hasAtLeastOneField) {
        throw new Error('Campos vacios');
        
      }

      const response = await fetch(url, fetchOptions);

      if (!response.ok) {
        const errorData = await response.json();
        // Verificamos si errorData tiene una propiedad 'errors'
        if (errorData.errors && Array.isArray(errorData.errors)) {
          const errorMessages = errorData.errors.map(error => error.msg);
          const concatenatedMessages = errorMessages.join(', ');
          throw new Error(concatenatedMessages);
        } else {
          throw new Error('Error de red inesperado');
        }
      }

      const result = await response.json();
      setData(result);
      setError(null);
    } catch (err) {
      if (err.name === 'AbortError') {
        console.log('Fetch aborted');
      } else if (retryCount < retries) {
        console.log(`Reconectando.. (${retryCount + 1})`);
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
  }, [url]);

  return { data, isLoading, error };
};
