import './styles/App.css'

import { ROUTES } from "./utils/routes.ts"

import Layout from "./components/layout/Layout.tsx";

import {Routes, Route} from "react-router-dom";

function App() {

  return (
    <>
        <Routes>
            <Route path={ROUTES.MAINPAGE} element={<Layout/>}>
                <Route path={ROUTES.AUTHORIZATION} element={<h1>hhh</h1>}/>
                <Route path={ROUTES.REGISTRATION} element={<h1>1111</h1>}/>
            </Route>
        </Routes>

    </>
  )
}

export default App
