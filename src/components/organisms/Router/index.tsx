import { lazy, Suspense } from "react";
import { Routes as AppRouter, Route } from "react-router-dom";
import Loader from "../../atoms/Loader";
import { Routes } from "../../../types";
import './styles.scss'

const UserInformationPage = lazy(() => import('../../../views/UserInformation'))
const UserProfilePage = lazy(() => import('../../../views/UserProfile'))

const Router = () => {
    return (
        <Suspense fallback={<Loader/>}>
            <main className={'main_content'}>
                <AppRouter>
                    <Route
                        path={Routes.USER_INFORMATION}
                        element={<UserInformationPage/>}
                    />
                    <Route
                        path={Routes.USER_PROFILE}
                        element={<UserProfilePage/>}
                    />
                </AppRouter>
            </main>
        </Suspense>
    )
}

export default Router