import { useEffect, useState } from "react";
import { useIsMobile } from "./useIsMobile";
import { useLocation } from "react-router-dom";

export const useMenu = () => {
    const isMobile = useIsMobile()
    const [isActive, setIsActive] = useState(() => false)
    const {pathname} = useLocation()

    useEffect(() => {
        setIsActive(() => false)
    }, [pathname])

    const handleIsActive = () => {
        setIsActive(prevState => !prevState)
    }

    useEffect(() => {

    }, [])

    return {
        isMobile,
        isActive,
        handleIsActive
    }
}