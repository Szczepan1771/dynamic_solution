import { useLayoutEffect, useState } from "react";

const MOBILE_WIDTH = 1024

export const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false)

    useLayoutEffect(() => {
        const changeSize = () => {
            setIsMobile(window.innerWidth < MOBILE_WIDTH)
        }
        window.addEventListener('resize', changeSize)

        return () => window.removeEventListener('resize', changeSize)
    }, [])

    return isMobile
}