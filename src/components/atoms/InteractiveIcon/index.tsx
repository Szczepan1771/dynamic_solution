import { FC, ReactNode } from "react";
import "./styles.scss"

interface InteractiveIconProps {
    onClick: () => void
    icon: ReactNode
}

const InteractiveIcon: FC<InteractiveIconProps> = (props) => {
    const {onClick, icon} = props
    return (
        <div className={'wrapper'} onClick={onClick}>
            {icon}
        </div>
    )
}

export default InteractiveIcon