import Logo from "components/atoms/Logo";
import Navigation from "components/molecules/Navigation";
import "./styles.scss"
import MobileNavigation from "components/molecules/MobileNavigation";
import { FiMenu } from "react-icons/fi";
import InteractiveIcon from "components/atoms/InteractiveIcon";
import { useHeader } from "hooks/useHeader";

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