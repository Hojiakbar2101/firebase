import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar";
import AppRouter from "./components/appRouter";
function App() {
  return(
  <BrowserRouter>
    <Navbar />
    <AppRouter />
  </BrowserRouter>
  );}

export default App;
