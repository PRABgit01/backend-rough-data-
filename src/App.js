import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./component/homepage/Home";
import Create from "./component/Create";
import Update from "./component/Update";
import Read from "./component/Read";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="create" element={<Create />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="read/:id" element={<Read />} />
      </Routes>
    </>
  );
}

export default App;
