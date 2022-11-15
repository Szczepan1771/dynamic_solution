import { FC } from "react";
import { FormInputProps } from "types";
import DatePicker from "react-datepicker";
import { useField, useFormikContext } from "formik";
import "react-datepicker/dist/react-datepicker.css";
import "./styles.scss"

const DateInput: FC<FormInputProps> = ({name}) => {
    const {setFieldValue} = useFormikContext()
    const [field] = useField(name)
    const {value} = field
    return (
        <div className={'container'}>
            <DatePicker
                id={name}
                className={'date_input'}
                {...field}
                value={value}
                selected={value}
                onChange={(date: Date) => setFieldValue(name, date)}
            />
        </div>
    )
}

export default DateInput