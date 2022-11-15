import { USER_INFORMATION } from "../../types";
import { InitialUserFormInformationType } from "../../views/UserInformation/config";

export const createUser = (body: InitialUserFormInformationType) => {
    const {avatar, avatarFile, ...rest} = body
    return Promise.resolve({
        ...rest,
        avatar: avatarFile
    }).then((data) => {
        sessionStorage.setItem(USER_INFORMATION, JSON.stringify(data))
    })
}