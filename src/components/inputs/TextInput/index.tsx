import "./styles.scss"
import { FC } from "react";
import { useField } from "formik";
import { FormInputProps } from "types";

interface TextInputProps extends FormInputProps {
    type: 'tel' | 'text'
}

const TextInput: FC<TextInputProps> = ({name, type}) => {
    const [field] = useField(name)
    return (
        <div className={'container'}>
            <input id={name} type={type} className={'container_input'} {...field} />
        </div>
    )
}

export default TextInput