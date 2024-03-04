import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Test1 from "./pages/Test1";
import NavBar from "./components/NavBar";
function App() {
    return (
        <div className="flex">
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route>
                        <Route index element={<Home />} />
                        <Route path="test1" element={<Test1 />} />
                        <Route path="test2" />
                        <Route path="" />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
