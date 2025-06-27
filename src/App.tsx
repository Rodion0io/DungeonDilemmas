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
                <Route path="123" element={<h1>sdg</h1>}/>
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
