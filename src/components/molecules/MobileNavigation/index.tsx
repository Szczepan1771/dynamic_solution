import { FC } from "react";
import { navigationList } from "../Navigation/config";
import NavigationItem from "../../atoms/NavigationItem";
import './styles.scss'
import InteractiveIcon from "../../atoms/InteractiveIcon";
import { FiX } from "react-icons/fi";

interface MobileNavigationProps {
    isActive: boolean
    handleOpen: () => void
}

const MobileNavigation: FC<MobileNavigationProps> = (props) => {
    const {isActive, handleOpen} = props
    return (
        <nav className={'mobile_navigation'}>
            <InteractiveIcon icon={<FiX/>} onClick={handleOpen}/>
            {isActive && navigationList.map(navigationItem => (
                <NavigationItem key={navigationItem.title} {...navigationItem} />
            ))}
        </nav>
    )
}

export default MobileNavigation