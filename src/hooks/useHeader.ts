import { useNavigate } from "react-router-dom";
import { Routes } from "../types";

export const useHeader = () => {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(Routes.HOME)
    }

    return {
        handleNavigate
    }
}