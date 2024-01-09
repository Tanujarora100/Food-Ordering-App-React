import { Body } from "./Body";
// import { Header } from "./Header/Header";
import ResponsiveAppBar from "./NavBar";
import "./Header/Header.css";

export function AppLayout() {
  return (
    <div>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Body></Body>
    </div>
  );
}
