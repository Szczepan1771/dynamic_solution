import { useField } from "formik";
import { FC } from "react";
import { FormInputProps } from "../../../types";
import './styles.scss'

const Textarea: FC<FormInputProps> = ({name}) => {
    const [field] = useField(name)
    return (
        <div className={'container'}>
            <textarea
                className={'container_textarea'}
                id={name}
                {...field}
            />
        </div>
    )
}

export default Textarea