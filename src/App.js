import "./App.css";
import Home from "./Component/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Blog from "./Component/Blog";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/About" element={<About/>}></Route>
          <Route path="/Contact" element={<Contact/>}></Route>
          <Route path="/Blog" element={<Blog/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
