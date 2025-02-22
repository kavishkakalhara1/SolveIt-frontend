import {
  BrowserRouter,
  Routes,
  Route,
  useBeforeUnload,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Sidebar from "./components/Sidebar";
import { RootState } from "./redux/store";

function App() {
  const user = useSelector((state: RootState) => state.user.user);

  return (
    <BrowserRouter>
      <Header />
      <div className="flex">
        {user && <Sidebar />}
        <div className="flex-grow">
      <AnimatedRoutes />
      </div>
      </div>
      <Routes></Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
