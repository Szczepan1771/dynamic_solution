import Logo from "../../atoms/Logo";
import Navigation from "../../molecules/Navigation";
import "./styles.scss"
import MobileNavigation from "../../molecules/MobileNavigation";
import { FiMenu } from "react-icons/fi";
import InteractiveIcon from "../../atoms/InteractiveIcon";
import { useHeader } from "../../../hooks/useHeader";

const Header = () => {
    const {
        isActive,
        isMobile,
        handleIsActive
    } = useHeader()
    return (
        <header className={'header'}>
            <Logo/>
            {(isMobile && !isActive) && <InteractiveIcon onClick={handleIsActive} icon={<FiMenu/>} />}
            {!isMobile ? <Navigation/> : isActive && <MobileNavigation isActive={isActive} handleOpen={handleIsActive}/>}
        </header>
    )
}

export default Header