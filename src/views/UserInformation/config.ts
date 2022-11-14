import { UserInformationType } from "../../services/api";
import * as Yup from 'yup'
import { FormField } from "../../types";

export interface InitialUserFormInformationType extends UserInformationType {
    avatarFile: string
}
export const initialUserFormInformation: InitialUserFormInformationType = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    birthday: '',
    about: '',
    avatar: '',
    avatarFile: ''
}

export const fields: FormField[] = [
    {
        type: 'text',
        name: 'firstName',
    },
    {
        type: 'text',
        name: 'lastName',
    },
    {
        type: 'text',
        name: 'email',
    },
    {
        type: 'text',
        name: 'phone',
    },
    {
        type: 'date',
        name: 'birthday',
    },
    {
        type: 'textarea',
        name: 'about',
    },
    {
        type: 'file',
        name: 'avatar',
    }
]

export const validationUserInformationSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is a required file'),
    lastName: Yup.string().required('Last name is a required file'),
    email: Yup.string().email('This field must be a valid email').required('Email is a required file'),
    phone: Yup.string().required('Phone is a required field'),
    birthday: Yup.date().required('Birthday is a required field'),
    about: Yup.string().required('About is a required field'),
    avatar: Yup.string().required('Avatar is a required field')
})

export type ValidationUserInformationSchemaType = typeof validationUserInformationSchema