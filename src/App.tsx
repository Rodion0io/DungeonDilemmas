import { ROUTES } from "./utils/routes.ts"

import Layout from "./components/layout/Layout.tsx";

import {Routes, Route} from "react-router-dom";
import LogInPage from "./components/LogInPage/LogInPage.tsx";
// import ProtectedLayout from "./components/layout/ProtectedLayout.tsx";
import ProfilePage from "./components/profilePage/ProfilePage.tsx";
import RatingPage from "./components/ratingPage/RatingPage.tsx";

function App() {

  return (
    <>
        {/*<ProtectedLayout>*/}
        <Routes>
            <Route path="/main" element={<Layout/>}>
                <Route index element={<h1>MainPage</h1>}/>
                <Route path={ROUTES.RATING} element={<RatingPage/>}/>
                <Route path={ROUTES.QUIZZES} element={<h1>QuizzesPage</h1>}/>
                <Route path={ROUTES.PROFILE} element={<ProfilePage/>}/>
            </Route>

            <Route path={ROUTES.AUTHORIZATION} element={<LogInPage/>}>
                <Route path={ROUTES.REGISTRATION} element={<LogInPage/>}/>
            </Route>
        </Routes>
        {/*</ProtectedLayout>*/}
    </>
  )
}

export default App;
