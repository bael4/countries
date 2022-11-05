import { useState } from "react";
import { Routes, Route, Navigate} from "react-router-dom";
import "./App.css";
// import AppRouter from "./components/AppRouter";
import Header from "./components/Header";
import Main from "./components/Main";
import Details from "./pages/Details";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";


function App() {
  const [countries, setCountries] = useState([]);

  return (
    <>
      <Header />
      <Main>
      <Routes>
        <Route path="/" element={<HomePage countries={countries} setCountries={setCountries}/>}/>
        <Route path="/country/:name" element={<Details/>} />
        <Route path="/notfound" element={<NotFound/>} />
        <Route path="/*" element={<Navigate to="/notfound" replace />} />
      </Routes>
      </Main>
    </>
  );
}

export default App;
