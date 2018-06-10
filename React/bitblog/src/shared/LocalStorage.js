class LocalStorageService {
    saveData(key, value) {
        return localStorage.setItem(key, JSON.stringify(value))
    };

    getData(key) {
        const data = localStorage.getItem(key);
        return JSON.parse(data);
    };
};

export const localStorageService = new LocalStorageService();