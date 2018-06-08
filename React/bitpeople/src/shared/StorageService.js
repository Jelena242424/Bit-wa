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

    // getMinutes() {
    //     const time = localStorage.getItem("reload") - localStorage.getItem("firstVisit");
    //     const timeDifference = time.getTime();
    //     const minutes = 1000 * 60;
    //     const elapsedTimeInMinutes = Math.round(timeDifference / minutes);
    //     return elapsedTimeInMinutes; 
    // }
}

export const storageService = new StorageService();