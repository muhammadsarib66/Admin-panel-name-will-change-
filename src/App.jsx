import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Screens/Dashboard/Dashboard";
import 'react-circular-progressbar/dist/styles.css';
import '@coreui/coreui/dist/css/coreui.min.css'

function App() {
  

  return (
    <>
     
      <BrowserRouter>
      <Dashboard/>
    </BrowserRouter>
    </>
  );
}

export default App;
