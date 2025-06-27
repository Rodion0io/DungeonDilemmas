import { ROUTES } from "./utils/routes.ts"

import Layout from "./components/layout/Layout.tsx";

import {Routes, Route} from "react-router-dom";
import LogInPage from "./components/LogInPage/LogInPage.tsx";
import ProtectedLayout from "./components/layout/ProtectedLayout.tsx";

function App() {

  return (
    <>
        <ProtectedLayout>
        <Routes>
            <Route path="/main" element={<Layout/>}>
                <Route index element={<h1>MainPage</h1>}/>
                <Route path={ROUTES.RATING} element={<h1>RatingPage</h1>}/>
                <Route path={ROUTES.QUIZZES} element={<h1>QuizzesPage</h1>}/>
                <Route path={ROUTES.PROFILE} element={<h1>ProfilePage</h1>}/>
            </Route>

            <Route path={ROUTES.AUTHORIZATION} element={<LogInPage/>}>
                <Route path={ROUTES.REGISTRATION} element={<LogInPage/>}/>
            </Route>
        </Routes>
        </ProtectedLayout>
    </>
  )
}

export default App;
