import Header from "../../atoms/Header";
import Navigation from "../../molecules/Navigation";
import "./styles.scss"
import MobileNavigation from "../../molecules/MobileNavigation";
import { FiMenu } from "react-icons/fi";
import InteractiveIcon from "../../atoms/InteractiveIcon";
import { useMenu } from "../../../hooks/useMenu";

const Menu = () => {
    const {
        isActive,
        isMobile,
        handleIsActive
    } = useMenu()
    return (
        <menu className={'menu'}>
            <Header/>
            {(isMobile && !isActive) && <InteractiveIcon onClick={handleIsActive} icon={<FiMenu/>} />}
            {!isMobile ? <Navigation/> : isActive && <MobileNavigation isActive={isActive} handleOpen={handleIsActive}/>}
        </menu>
    )
}

export default Menu