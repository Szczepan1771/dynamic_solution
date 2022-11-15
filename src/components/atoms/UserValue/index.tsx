import { FC } from "react";
import { parseDateToString } from "utils/parseDateToString";
import './styles.scss'

interface UserValueProps {
    value: string | Date
}

const UserValue: FC<UserValueProps> = ({value}) => {
    const parsedValue = typeof value === 'string' ? value : parseDateToString(value)
    return <p className={'user_value'}>{parsedValue}</p>
}

export default UserValue