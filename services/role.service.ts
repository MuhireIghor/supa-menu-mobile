import { sendRequest } from "@/config/api.config"

export const getUserProfile = async (userId: string) => {
    try {
        const url = `users/${userId}`
        const user = await sendRequest(url, "GET");
        console.log("user profile", user);
        return user;


    }
    catch (err) {
        throw new Error((err as unknown as any).message)
    }
}