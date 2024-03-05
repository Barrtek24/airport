import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Test1 from "./pages/Test1";
import { useState } from "react";
import NewUser from "./pages/NewUser";
import React from 'react'
import Inventory from "./pages/Inventory";
import T2 from "./pages/t2";
import T21 from "./pages/t21";
import T22 from "./pages/t22";
import T1 from "./pages/t1";
function App() {
  const sStorageTemp = localStorage.getItem("test");

  const [playerData, setPlayerData] = useState(sStorageTemp);

  // localStorage.setItem("isActive", true)

  const lsflag = localStorage.getItem("isActive");

  return (
    <div className="flex">
      {/* <BrowserRouter>
      
        <Routes>
          <Route path="new" element={<NewUser />} />
          <Route path="/home" element={<Home />}>
            <Route path="/home/inv" element={<Inventory/>}/>
          </Route>
        </Routes>
      </BrowserRouter> */}
      <BrowserRouter>
        <Routes>
            <Route index element={<T1 />}/>
            <Route path="t1" element={<T1 />}/>
            <Route path="t2" element={<T2 />}>
                <Route index element={<T21 />}/>
                <Route  element={<T22 />}/>
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
