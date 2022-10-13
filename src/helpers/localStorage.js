const getSavedInLocalStorage = (key) => localStorage.getItem(key);

const saveLocalStorage = (key, item) => {
  localStorage.setItem(key, JSON.stringify(item));
};

export { getSavedInLocalStorage, saveLocalStorage };
