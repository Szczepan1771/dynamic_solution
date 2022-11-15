import { FC } from "react";
import "./styles.scss"

interface ButtonProps {
    label: string
    onClick: () => void
    disabled?: boolean
}

const Button: FC<ButtonProps> = (props) => {
    const {label, disabled, ...rest} = props
    return (
        <button className={!disabled ? 'button' : 'button_disabled'} {...rest}>
            {label}
        </button>
    )
}

export default Button