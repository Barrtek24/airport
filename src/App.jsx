import {
    BrowserRouter,
    Navigate,
    Route,
    Routes,
    useNavigate,
} from "react-router-dom";
import Home from "./pages/Home";
import { useState } from "react";
import NewUser from "./pages/NewUser";
import React from "react";
import Inventory from "./pages/Inventory";
import ErrorPage from "./pages/404";
function App() {
    const sStorageTemp = localStorage.getItem("test");
    const [playerData, setPlayerData] = useState(sStorageTemp);

    // localStorage.setItem("isActive", true)

    const lsflag = localStorage.getItem("isActive");

    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/* <Route index element={<Home />} /> */}
                    <Route path="welcome" element={<NewUser />} />

                    {/* W tym indexie ma byc navbar oraz rzeczy, które wyświetlają się zawsze*/}
                    <Route path="home" element={<Home />}>
                        <Route path="inventory" element={<Inventory />} />
                    </Route>
                    <Route
                        path="/"
                        element={<Navigate to="home" replace={true} />}
                    />
                    <Route path="*" element={<ErrorPage/>} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
