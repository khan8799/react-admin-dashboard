export const API_URL = 'http://localhost:8080/api/';

export const makeRequest = async (url, option = {}) => {
    url = `${API_URL}${url}`
    const res = await fetch(url, option)
    return res.json();
}
