import { FormField } from "types";
import { useFormikContext } from "formik";
import FormLabel from "components/atoms/FormLabel";
import ErrorMessage from "components/atoms/ErrorMessage";
import TextInput from "components/inputs/TextInput";
import Textarea from "components/inputs/Textarea";
import DateInput from "components/inputs/DateInput";
import FileLoader from "components/inputs/FileLoader";
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
                        {(type === 'text' || type === 'tel') && <TextInput name={name} type={type}/>}
                        {type === 'textarea' && <Textarea name={name}/>}
                        {type === 'file' && <FileLoader name={name}/>}
                        {type === 'date' && <DateInput name={name}/>}
                        <ErrorMessage touched={isTouched} message={message}/>
                    </div>
                )
            }
        )
    ), [fields, errors, touched])

    return (
        <form>
            {form}
        </form>
    )
}

export default FormBody