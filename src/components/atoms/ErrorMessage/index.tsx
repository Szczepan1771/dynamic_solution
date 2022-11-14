import { FC } from "react";
import './styles.scss'

interface ErrorMessageProps {
    touched: boolean
    message: string | null
}

const correctClassName = (touched: boolean): string => {
    const map = new Map()
    map.set('true', 'visible')
    map.set('false', 'hidden')

    return map.get(`${touched}`)
}

const ErrorMessage: FC<ErrorMessageProps> = ({touched, message}) => {
    return <p className={correctClassName(touched)}>{message}</p>
}

export default ErrorMessage