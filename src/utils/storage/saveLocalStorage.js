const saveLocalStorage = (key, value) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(error);
  }
};

const getLocalStorage = (key) => {
  try {
    const item = window.localStorage.getItem(key);
    if (item != "undefined") {
      return JSON.parse(item);
    }
  } catch (error) {
    console.log(error);
  }
};

export { saveLocalStorage, getLocalStorage };
