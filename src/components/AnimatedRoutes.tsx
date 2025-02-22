import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import TicketList from "./TicketList";
import TicketDetails from "./TicketDetails";
import TicketForm from "./TicketForm";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/tickets" element={<TicketList />} />
        <Route path="/tickets/:id" element={<TicketDetails />} />
        <Route path="/create-ticket" element={<TicketForm />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;