import { FC } from "react";
import Button from "../../components/atoms/Button";

interface EmptyProfileDataProps {
    handleRedirect: () => void
}

const EmptyProfileData: FC<EmptyProfileDataProps> = ({handleRedirect}) => {
    return (
        <div className={'profile_empty'}>
            <p>Empty profile data</p>
            <Button
                label={'Go to the user information page'} onClick={handleRedirect}
            />
        </div>
    )
}

export default EmptyProfileData