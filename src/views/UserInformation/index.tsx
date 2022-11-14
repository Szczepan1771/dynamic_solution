import CustomForm from "../../components/organisms/CustomForm";
import {
    fields,
    initialUserFormInformation,
    InitialUserFormInformationType,
    validationUserInformationSchema,
    ValidationUserInformationSchemaType
} from "./config";

import { useUserInformation } from "../../hooks/useUserInformation";

const UserInformation = () => {
    const {handleSubmit} = useUserInformation()

    return (
        <div>
            <CustomForm<InitialUserFormInformationType, ValidationUserInformationSchemaType>
                initialValues={initialUserFormInformation}
                fields={fields}
                onSubmit={handleSubmit}
                validationSchema={validationUserInformationSchema}
            />
        </div>
    )
}

export default UserInformation