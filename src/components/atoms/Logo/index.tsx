import phoneLogo from "../../../assets/logo/star-wars-phone.png"
import mobileLogo from "../../../assets/logo/star-wars-mobile.png"
import desktopLogo from "../../../assets/logo/star-wars-desktop.png"
import "./styles.scss"

const Logo = () => {

    return (
        <div className={'logo'}>
            <img
                className={'logo_image'}
                srcSet={`${phoneLogo}, ${mobileLogo}, ${desktopLogo}`}
                alt={'Star Wars logo'}
            />
        </div>
    )
}

export default Logo