export const USER_INFORMATION = 'user_information'

export enum Routes {
    USER_INFORMATION = '/',
    USER_PROFILE = '/user-profile'
}

export type FieldType = 'text' | 'file' | 'date' | 'textarea' | 'tel'

export interface FormField {
    name: string
    type: FieldType
}

export interface NavigationItemProps {
    link: Routes
    title: string
}

export interface FormInputProps {
    name: string
}