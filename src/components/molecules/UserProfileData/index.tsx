import UserLabel from "../../atoms/UserLabel";
import { UserInformationType } from "../../../services/api";
import { FC } from "react";
import UserValue from "../../atoms/UserValue";
import './styles.scss'

interface UserProfileDataProps {
    data: Omit<UserInformationType, 'avatar'>
}

const UserProfileData: FC<UserProfileDataProps> = ({data}) => {
    return <>
        {Object.keys(data).map(key => (
            <div className={'user_profile'} key={key}>
                <UserLabel name={key}/>
                <UserValue value={data[key as keyof UserProfileDataProps['data']]}/>
            </div>
        ))}
    </>
}

export default UserProfileData