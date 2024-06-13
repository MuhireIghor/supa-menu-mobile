import axios from 'axios';

const API_URL = 'http://10.5.220.210:4000/api/v1';

export const sendRequest = async (url: string,method: string, payload?: Object, headers?: any) => {
    try {
        const config = {
            headers: headers || {}
        };

        let response;
        if (method === 'GET') {
            response = await axios.get(`${API_URL}/${url}`, config);
        } else if (method === 'POST') {
            response = await axios.post(`${API_URL}/${url}`, payload);
        } else if (method === 'PUT') {
            response = await axios.put(`${API_URL}/${url}`, payload, config);
        } else if (method === 'DELETE') {
            response = await axios.delete(`${API_URL}/${url}`, config);
        }

        return response?.data;
    } catch (err: any) {
        console.log("Request failed:", err.response ? err.response.data : err.message);
        throw new Error(err.message);
    }
};
