import { useEffect, useState } from "react";
import { UserInformationType } from "../services/api";
import { getUserData } from "../services/userProfile";
import { useNavigate } from "react-router-dom";
import { Routes } from "../types";

export const useProfileData = () => {
    const navigate = useNavigate()
    const [data, setData] = useState<UserInformationType | null>(null)

    useEffect(() => {
        getUserData().then(data => {
            setData(data)
        })
    }, [])

    const handleRedirect = () => {
        navigate(Routes.USER_INFORMATION)
    }

    return {
        data,
        handleRedirect
    }
}