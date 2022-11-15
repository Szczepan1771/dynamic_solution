import { USER_INFORMATION } from "types";
import { UserInformationType } from "../api";

export const getUserData = (): Promise<UserInformationType | null> => {
    const userData = sessionStorage.getItem(USER_INFORMATION)
    const response: UserInformationType | null = userData ? JSON.parse(userData) : null
    if(!response) {
        return Promise.resolve(response)
    }
    return Promise.resolve({
        ...response
    })
}