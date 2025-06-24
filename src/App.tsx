import './styles/App.css'

import { ROUTES } from "./utils/routes.ts"

import Layout from "./components/layout/Layout.tsx";

import {Routes, Route} from "react-router-dom";

function App() {

  return (
    <>
        <Routes>
            <Route path="/main" element={<Layout/>}>
                <Route path="123" element={<h1>sdg</h1>}/>
            </Route>

            <Route path={ROUTES.AUTHORIZATION} element={<h1>hhh</h1>}>
                <Route path={ROUTES.REGISTRATION} element={<h1>1111</h1>}/>
            </Route>
        </Routes>

    </>
  )
}

export default App;
