import { useMemo } from "react";
import Button from "components/atoms/Button";
import { useFormikContext } from "formik";

const FormFooter = <T,> () => {
    const {submitForm, isSubmitting, isValid} = useFormikContext<T>()
    const isDisabled = useMemo(() => isSubmitting || !isValid,[isSubmitting, isValid])
    return (
        <div>
            <Button onClick={ () => !isDisabled && submitForm()} disabled={isDisabled} label={'Add user'}/>
        </div>
    )
}

export default FormFooter