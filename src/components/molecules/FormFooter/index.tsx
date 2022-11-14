import { useMemo } from "react";
import Button from "../../atoms/Button";
import { useFormikContext } from "formik";

const FormFooter = <T,> () => {
    const {submitForm, isSubmitting, isValid} = useFormikContext<T>()
    const isDisabled = useMemo(() => isSubmitting || !isValid,[isSubmitting, isValid])
    return (
        <section>
            <Button onClick={ () => !isDisabled && submitForm()} disabled={isDisabled} label={'Add user'}/>
        </section>
    )
}

export default FormFooter