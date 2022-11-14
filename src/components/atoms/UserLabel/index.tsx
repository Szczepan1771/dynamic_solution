import { FC, useMemo } from "react";
import { labelKeys } from "../../../assets/labelKeys";
import "./styles.scss"

interface UserLabelProps {
    name: string
}

const UserLabel: FC<UserLabelProps> = ({name}) => {
    const label = useMemo(() => labelKeys[name as keyof typeof labelKeys], [name])
    return <p className={'user_label'}>{label}: </p>
}

export default UserLabel