import { createUser } from "services/userInformation";
import { InitialUserFormInformationType } from "views/UserInformation/config";
import { useNavigate } from "react-router-dom";
import { Routes } from "types";

export const useUserInformation = () => {
    const navigate = useNavigate()
    const handleSubmit = async (values: InitialUserFormInformationType) => {
        await createUser(values).then(() => {
            navigate(Routes.USER_PROFILE)
        })
    }

    return {
        handleSubmit
    }
}