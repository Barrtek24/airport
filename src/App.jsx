import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Test1 from "./pages/Test1";
import { useState } from "react";
import NewUser from "./pages/NewUser";
import React from 'react'
import Inventory from "./pages/Inventory";
function App() {
  const sStorageTemp = localStorage.getItem("test");

  const [playerData, setPlayerData] = useState(sStorageTemp);

  // localStorage.setItem("isActive", true)

  const lsflag = localStorage.getItem("isActive");

  return (
    <div className="flex">
      <BrowserRouter>
        <Routes>
            <Route index element={<Home />}/>
            <Route path="welcome" element={<NewUser />}/>

            {/* W tym indexie ma byc navbar oraz rzeczy, które wyświetlają się zawsze*/}
            <Route path="home" element={<Home />}>
                
                {/* <Route index element={<T21 />}/>  */}
                
                <Route path="inv" element={<Inventory />}/>
              
            </Route>
            
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
