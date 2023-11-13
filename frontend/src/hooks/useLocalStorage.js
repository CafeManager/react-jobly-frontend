
function useLocalStorage() {
    function getLocalItem(item) {
        return localStorage.getItem(item) ? localStorage.getItem(item) : "";
    }

    function setLocalItem(itemKey, value) {
        localStorage.setItem(itemKey, value);
    }

    function clearItem(item) {
        localStorage.removeItem(item);
    }

    return [getLocalItem, setLocalItem, clearItem];
}

export default useLocalStorage;
