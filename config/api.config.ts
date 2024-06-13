import axios from "axios"
const API_URL = 'http://10.5.220.210:4000/api/v1';
const sendRequest = async (url: string, payload: Object, method: string, headers?: any) => {
    try {
        switch (method) {
            case 'GET':
                const { data } = await axios.get(`/${API_URL}`,{headers});
                return data;
            case 'POST':
                const {} = await axios.get(`/${API_URL}`,{headers})
        }

    }
    catch (err: any) {
        throw new Error(err.message)
    }

}