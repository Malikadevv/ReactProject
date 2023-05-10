import './App.css';
import {Route, Routes} from "react-router-dom";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <div>
     <Routes>
         <Route  path={'/'} element={<Header/>}/>
         <Route  path={'/'} element={<Footer/>}/>
     </Routes>
    </div>
  );
}

export default App;
