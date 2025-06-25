import { ROUTES } from "./utils/routes.ts"

import Layout from "./components/layout/Layout.tsx";

import {Routes, Route} from "react-router-dom";
import LogInPage from "./components/LogInPage/LogInPage.tsx";

function App() {

  return (
    <>
        <Routes>
            <Route path="/main" element={<Layout/>}>
                <Route path="123" element={<h1>sdg</h1>}/>
            </Route>

            <Route path={ROUTES.AUTHORIZATION} element={<LogInPage/>}>
                <Route path={ROUTES.REGISTRATION} element={<LogInPage/>}/>
            </Route>
        </Routes>

    </>
  )
}

export default App;
