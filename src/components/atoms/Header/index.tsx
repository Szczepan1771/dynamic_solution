import phoneLogo from "../../../assets/logo/star-wars-phone.png"
import mobileLogo from "../../../assets/logo/star-wars-mobile.png"
import desktopLogo from "../../../assets/logo/star-wars-desktop.png"
import "./styles.scss"
import { useHeader } from "../../../hooks/useHeader";

const Header = () => {
    const {handleNavigate} = useHeader()
    return (
        <header className={'header'} onClick={handleNavigate}>
            <img
                className={'header_logo'}
                srcSet={`${phoneLogo}, ${mobileLogo}, ${desktopLogo}`}
                alt={'Star Wars logo'}
            />
        </header>
    )
}

export default Header