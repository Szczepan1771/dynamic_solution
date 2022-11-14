import { FormField } from "../../../types";
import { useFormikContext } from "formik";
import FormLabel from "../../atoms/FormLabel";
import ErrorMessage from "../../atoms/ErrorMessage";
import TextInput from "../../inputs/TextInput";
import Textarea from "../../inputs/Textarea";
import DateInput from "../../inputs/DateInput";
import FileLoader from "../../inputs/FileLoader";

interface FormBodyProps {
    fields: FormField[]
}

const FormBody = <T, >({fields}: FormBodyProps) => {
    const {errors, touched} = useFormikContext<T>()

    return (
        <form>
            {fields.map(field => {
                    const {name, type} = field
                    const id = name
                    const key = name
                    const message = errors[field.name as keyof T] as string
                    const isTouched = !!touched[field.name as keyof T]
                    return (
                        <div key={key}>
                            <FormLabel id={id} name={name}/>
                            {type === 'text' && <TextInput id={id} name={name}/>}
                            {type === 'textarea' && <Textarea id={id} name={name}/>}
                            {type === 'file' && <FileLoader id={id} name={name} />}
                            {type === 'date' && <DateInput id={id} name={name}/>}
                            <ErrorMessage touched={isTouched} message={message}/>
                        </div>
                    )
                }
            )}
        </form>
    )
}

export default FormBody