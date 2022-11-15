import { useLocation } from "react-router-dom";
import { useMemo } from "react";

export const useNavigationItem = (link: string) => {
    const {pathname} = useLocation()

    const isActive = useMemo(() => pathname === link , [pathname, link])

    return {
        isActive,
    }
}


