import { FC } from "react";
import { FormInputProps } from "../../../types";
import { useField } from "formik";

const DateInput: FC<FormInputProps> = ({name}) => {
    const [field] = useField(name)

    return (
        <div className={'container'}>
            <input
                id={name}
                lang={'en-EN'}
                className={'container_input'}
                type={'date'}
                {...field}
            />
        </div>
    )
}

export default DateInput