import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Test1 from "./pages/Test1";
import NavBar from "./components/NavBar";
import { useState } from "react";
import NewUser from "./pages/NewUser";

function App() {


    const sStorageTemp = localStorage.getItem("test");

    const [playerData, setPlayerData] = useState(sStorageTemp);

    // localStorage.setItem("isActive", true)

    const lsflag = localStorage.getItem("isActive");

    return (
        <div className="flex">
            <BrowserRouter>
                {lsflag && <NavBar />}
                
                <Routes>
                    <Route>
                        <Route index element={<Home />} />
                        <Route path="test1" element={<Test1 />} />
                        <Route path="test2" />
                        <Route path="new" element={<NewUser />}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
