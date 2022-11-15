import { FC } from "react";
import { labelKeys } from "assets/labelKeys";
import "./styles.scss"

interface UserLabelProps {
    name: string
}

const UserLabel: FC<UserLabelProps> = ({name}) => {
    return <p className={'user_label'}>{labelKeys[name as keyof typeof labelKeys]}: </p>
}

export default UserLabel