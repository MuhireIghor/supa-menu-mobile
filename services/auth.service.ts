
import { sendRequest } from "@/config/api.config";
import { createUser, login } from "@/redux/slices/userSlice";


// }
export const signUp = async (dispatch: any, setLoading: React.Dispatch<React.SetStateAction<boolean>>, payload: { username: string, phoneNumber: string, email: string, password: string },) => {
    try {
        setLoading(true);
        const url = "users/create";
        const resp = await sendRequest(url, "POST", payload, { 'Content-Type': 'application/json' });
        if (!resp) {
            console.log("Error occured")
        }
        console.log("Response", resp)
        dispatch(createUser(resp))
    }
    catch (err: any) {
        console.log(`Error occured in the auth service ${err.message}`);
        throw new Error(err)

    }
    finally {
        console.log("final");
        setLoading(false)
    }
}

export const loginUser = async (dispatch: any, setLoading: React.Dispatch<React.SetStateAction<boolean>>, payload: { email: string, password: string }) => {
    try {
        const url = 'auth/login';
        const resp = await sendRequest(url, "POST", payload);
        dispatch(login(resp))
        console.log(resp)
    }
    catch (err: any) {
        throw new Error(err);
    }
    finally {
        setLoading(false);
    }
}