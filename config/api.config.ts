import axios from "axios"
const API_URL = 'http://10.5.220.210:4000/api/v1';
export const sendRequest = async (url: string, payload: Object, method: string, headers?: any) => {
    try {
        if (method === 'GET') {

            const resp = await axios.get(`${API_URL}/${url}`, headers);
            return resp.data;
        }
        else if (method === 'POST') {
            const resp = await axios.post(`${API_URL}/${url}`, payload, headers);
            return resp.data;
        }
        else if (method === 'PUT') {
            const resp = await axios.put(`${API_URL}/${url}`, payload, headers);
            return resp.data;

        }
        else if (method === 'DELETE') {
            const resp = await axios.delete(`${API_URL}/${url}`, headers);
            return resp.data;
        }


    }
    catch (err: any) {
        console.log(err)
        throw new Error(err.message)
    }

}