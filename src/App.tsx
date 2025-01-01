import {
  BrowserRouter,
  Routes,
  Route,
  useBeforeUnload,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AnimatedRoutes />
      <Routes></Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
