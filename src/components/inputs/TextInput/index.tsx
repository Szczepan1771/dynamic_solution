import "./styles.scss"
import { FC } from "react";
import { useField } from "formik";
import { FormInputProps } from "../../../types";


const TextInput: FC<FormInputProps> = ({name, id}) => {
    const [field] = useField(name)
    return (
        <div className={'container'}>
            <input id={id} className={'container_input'} {...field} />
        </div>
    )
}

export default TextInput