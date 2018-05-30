
const endPoint = "http://127.0.0.1:3000";
export const fetchData = () => {
    return fetch(endPoint)
        .then(response => response.json())
}

