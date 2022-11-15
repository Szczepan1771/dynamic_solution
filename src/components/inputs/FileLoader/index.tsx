import { FC, useEffect, useRef, useState } from "react";
import { FormInputProps } from "../../../types";
import { useField, useFormikContext } from "formik";
import { fileToDataUri } from "../../../utils/fileToDataUri";
import InteractiveIcon from "../../atoms/InteractiveIcon";
import { FiUpload } from "react-icons/fi";
import './styles.scss'
import { InitialUserFormInformationType } from "../../../views/UserInformation/config";

const MAX_SIZE = 1024 * 1024

const FileLoader: FC<FormInputProps> = ({name}) => {
    const [isClick, setIsClick] = useState(() => false)
    const {setFieldValue, setFieldError, values} = useFormikContext<InitialUserFormInformationType>()
    const ref = useRef()
    const [field] = useField(name)

    useEffect(() => {
        if (ref && ref.current) {
            if (isClick) {
                const inputRef = ref as unknown as { current: HTMLElement }
                inputRef.current.click()
                setIsClick(false)
            }
        }
    }, [ref, isClick])

    return (
        <div className={'wrapper_input'}>
            <div className={'file_input'}>
                <input
                    //@ts-ignore
                    ref={ref}
                    id={name}
                    type="file"
                    accept={'image/png, image/jpg, image/webp'}
                    lang={'en-EN'}
                    {...field}
                    onChange={(evt => {
                        const files = evt.target.files as FileList
                        const file = files[0]
                        if (file.size >= MAX_SIZE) {
                            setFieldError(name, 'The file is too big')
                            return
                        }
                        field.onChange(evt)
                        fileToDataUri(file).then(dataUri => {
                            setFieldValue('avatarFile', dataUri)
                        })
                    })}
                />
                <InteractiveIcon onClick={() => setIsClick(true)} icon={<FiUpload/>}/>
            </div>
            {values.avatarFile && <div className={'file_input'}><img src={values.avatarFile} alt={'avatar'}/></div>}
        </div>
    )
}

export default FileLoader