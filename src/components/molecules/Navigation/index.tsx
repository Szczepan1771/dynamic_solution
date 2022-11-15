import { navigationList } from "./config";
import NavigationItem from "components/atoms/NavigationItem";
import './styles.scss'

const Navigation = () => {
    return (
        <nav className={'navigation'}>
            {navigationList.map(navigationItem => (
                <NavigationItem key={navigationItem.title} {...navigationItem} />
            ))}
        </nav>
    )
}

export default Navigation