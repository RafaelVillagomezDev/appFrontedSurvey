import { useState } from "react";
/*
  Funcion: recibe una key y valor a almacenar en el localStorage
  return: valorModificado y modificador
*/

const hookLocalStorage=(key, initialValue)=> {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue
    }
  });

  const setValue=(value)=>{
    try{
      setStoredValue(value)
      window.localStorage.setItem(key,JSON.stringify(value))
    }catch(error){
      console.log(error)
    }
  }

  return [storedValue,setValue]

}

export {hookLocalStorage}