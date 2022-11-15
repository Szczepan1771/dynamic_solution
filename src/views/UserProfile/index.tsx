import UserProfileData from "components/molecules/UserProfileData";
import './style.scss'
import { useProfileData } from "hooks/useProfileData";
import EmptyProfileData from "./EmptyProfileData";

const UserProfile = () => {
    const {data, handleRedirect} = useProfileData()

    if (!data) return <EmptyProfileData handleRedirect={handleRedirect}/>

    const {avatar, ...rest} = data

    return (
        <div className={'profile'}>
            <img className={'profile_image'} src={avatar} alt=""/>
            <div>
                <UserProfileData data={rest}/>
            </div>
        </div>
    )
}

export default UserProfile