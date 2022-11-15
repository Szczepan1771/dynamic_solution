import "./styles.scss"
import { FC } from "react";
import { useField } from "formik";
import { FormInputProps } from "../../../types";


const TextInput: FC<FormInputProps> = ({name}) => {
    const [field] = useField(name)
    return (
        <div className={'container'}>
            <input id={name} className={'container_input'} {...field} />
        </div>
    )
}

export default TextInput