import { FC, useMemo } from "react";
import { ID } from "../../../types";
import './styles.scss'
import { labelKeys } from "../../../assets/labelKeys";

interface FormLabelProps {
    id?: ID
    name: string
}

const FormLabel: FC<FormLabelProps> = ({id, name}) => {
    const label = useMemo(() => labelKeys[name as keyof typeof labelKeys], [name])
    return <label className={'label'} htmlFor={id}>{label}</label>
}

export default FormLabel