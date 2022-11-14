import { useLocation, useNavigate } from "react-router-dom";
import { useMemo } from "react";

export const useNavigationItem = (link: string) => {
    const navigate = useNavigate()
    const {pathname} = useLocation()

    const isActive = useMemo(() => pathname === link , [pathname, link])

    const handleNavigate = () => {
        navigate(link)
    }

    return {
        isActive,
        handleNavigate
    }
}


