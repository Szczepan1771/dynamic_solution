import { Formik } from "formik"
import FormBody from "../../molecules/FormBody";
import FormFooter from "../../molecules/FormFooter";
import { FormField } from "../../../types";

interface CustomFormProps <InitialValuesType, ValidationSchemaType> {
    initialValues: InitialValuesType
    validationSchema: ValidationSchemaType
    fields: FormField[]
    onSubmit: (values: InitialValuesType) => void
}

const CustomForm = <T extends {}, U >(props: CustomFormProps<T, U>) => {
    const {fields, ...rest} = props
    return (
        <Formik
            {...rest}
        >
            <div>
                <FormBody<T> fields={fields}/>
                <FormFooter<T>/>
            </div>
        </Formik>
    )
}

export default CustomForm