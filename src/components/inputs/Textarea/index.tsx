import { useField } from "formik";
import { FC } from "react";
import { FormInputProps } from "../../../types";
import './styles.scss'

const Textarea: FC<FormInputProps> = ({name, id}) => {
    const [field] = useField(name)
    return (
        <div className={'container'}>
            <textarea
                className={'container_textarea'}
                id={id} {...field}
            />
        </div>
    )
}

export default Textarea