import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Ranker from "./components/Ranker";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/ranker" element={<Ranker/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
