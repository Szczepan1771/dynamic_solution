import { FC } from "react";
import './styles.scss'
import { labelKeys } from "assets/labelKeys";

interface FormLabelProps {
    name: string
}

const FormLabel: FC<FormLabelProps> = ({name}) => {
    return <label className={'label'} htmlFor={name}>{labelKeys[name as keyof typeof labelKeys]}</label>
}

export default FormLabel