import './styles.scss'
import { FC } from "react";
import { useNavigationItem } from "../../../hooks/useNavigationItem";
import { NavigationItemProps } from "../../../types";

const NavigationItem: FC<NavigationItemProps> = ({link, title}) => {
    const {isActive, handleNavigate} = useNavigationItem(link)
    return (
        <div className={'item'} onClick={handleNavigate}>
            <div className={`item_link${isActive ? '--active' : ''}`}>
                {title}
            </div>
            <div className={`item_bar${isActive ? '--active' : ''}`}/>
        </div>
    )
}

export default NavigationItem