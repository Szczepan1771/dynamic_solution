import React, {  FC } from "react";
import { FormInputProps } from "../../../types";
import { useField, useFormikContext } from "formik";
import { fileToDataUri } from "../../../utils/fileToDataUri";

const FileLoader: FC<FormInputProps> = ({name}) => {
    const {setFieldValue} = useFormikContext()
    const [field] = useField(name)

    return (
        <div>
            <input
                id={name}
                type="file"
                accept={'image/*'}
                lang={'en-EN'}
                {...field}
                onChange={(evt => {
                    field.onChange(evt)
                    const files = evt.target.files as FileList
                    const file = files[0]
                    fileToDataUri(file).then(dataUri => {
                        setFieldValue('avatarFile', dataUri)
                    })
                })}
            />
        </div>
    )
}

export default FileLoader