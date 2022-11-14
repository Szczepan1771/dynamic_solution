import { FC } from "react";
import { FormInputProps } from "../../../types";
import { useField } from "formik";

const DateInput: FC<FormInputProps> = ({name, id}) => {
    const [field] = useField(name)

    return (
        <div className={'container'}>
            <input
                id={id}
                className={'container_input'}
                type={'date'}
                {...field}
            />
        </div>
    )
}

export default DateInput