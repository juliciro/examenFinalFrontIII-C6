import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import HomeContainer from "./Components/pages/Home/HomeContainer";
import NavbarMaterial from "./Components/layouts/Navbar/NavbarMaterial/NavbarMaterial";
import Contact from "./Components/pages/Contact/Contact";
import DentistsContainer from "./Components/pages/Dentists/DentistsContainer";
import FavsContainer from "./Components/pages/Favs/FavsContainer";
import GlobalContextProvider from "./Context/GlobalContext";

function App() {
  return (
    <BrowserRouter>
      <GlobalContextProvider>
        <Routes>
          <Route element={<NavbarMaterial />}>
            <Route path="/" element={<HomeContainer />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dentists" element={<DentistsContainer />} />
            <Route path="/Favs" element={<FavsContainer />} />
          </Route>
        </Routes>
      </GlobalContextProvider>
    </BrowserRouter>
  );
}

export default App;
