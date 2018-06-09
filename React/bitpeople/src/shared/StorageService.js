class StorageService {
    save(key, value) {
        localStorage.setItem(key, JSON.stringify(value))
    }

    read(key) {
        const data = localStorage.getItem(key);
        return JSON.parse(data)
    }
    has(key) {
        return !!localStorage.getItem(key) && localStorage.getItem(key).length;
    }
    setTime(key, value) {
        localStorage.setItem(key, value);
    }

}

export const storageService = new StorageService();