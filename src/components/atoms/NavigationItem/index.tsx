import './styles.scss'
import { FC } from "react";
import { useNavigationItem } from "../../../hooks/useNavigationItem";
import { NavigationItemProps } from "../../../types";
import { NavLink } from 'react-router-dom';

const NavigationItem: FC<NavigationItemProps> = ({link, title}) => {
    const {isActive} = useNavigationItem(link)
    return (
        <div className={'item'}>
            <NavLink to={link} className={({isActive}) => `item_link${isActive ? '--active' : ''}`}>
                {title}
            </NavLink>
            <div className={`item_bar${isActive ? '--active' : ''}`}/>
        </div>
    )
}

export default NavigationItem