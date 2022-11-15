import { FormField } from "../../../types";
import { useFormikContext } from "formik";
import FormLabel from "../../atoms/FormLabel";
import ErrorMessage from "../../atoms/ErrorMessage";
import TextInput from "../../inputs/TextInput";
import Textarea from "../../inputs/Textarea";
import DateInput from "../../inputs/DateInput";
import FileLoader from "../../inputs/FileLoader";
import { useMemo } from "react";

interface FormBodyProps {
    fields: FormField[]
}

const FormBody = <T, >({fields}: FormBodyProps) => {
    const {errors, touched} = useFormikContext<T>()

    const form = useMemo(() => (
        fields.map(field => {
                const {name, type} = field
                const message = errors[field.name as keyof T] as string
                const isTouched = !!touched[field.name as keyof T]
                return (
                    <div key={name}>
                        <FormLabel name={name}/>
                        {type === 'text' && <TextInput name={name}/>}
                        {type === 'textarea' && <Textarea name={name}/>}
                        {type === 'file' && <FileLoader name={name} />}
                        {type === 'date' && <DateInput name={name}/>}
                        <ErrorMessage touched={isTouched} message={message}/>
                    </div>
                )
            }
        )
    ) , [fields])

    return (
        <form>
            {form}
        </form>
    )
}

export default FormBody