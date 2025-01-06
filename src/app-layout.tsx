import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/pages/header";
import Footer from "./components/pages/footer";
// import RouterComponent from "./components/routerComponent";

function AppLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default AppLayout;
