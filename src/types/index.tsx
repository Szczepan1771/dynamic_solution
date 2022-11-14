export const USER_INFORMATION = 'user_information'
export type ID = string

export enum Routes {
    HOME = '/',
    USER_INFORMATION = '/user-information',
    USER_PROFILE = '/user-profile'
}

export type FileType = {
    size: number
    type: string
}

export type FieldType = 'text' | 'file' | 'date' | 'textarea'

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
    id: string
}