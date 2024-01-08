import { Body } from "./Body/Body";
import { Header } from "./Header/Header";
import "./Header/Header.css";

export function AppLayout() {
  return (
    <div>
      <Header></Header>
      <Body></Body>
    </div>
  );
}
