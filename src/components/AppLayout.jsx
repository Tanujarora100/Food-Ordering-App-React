import { BodyLayout } from "./Body";
import { Header } from "./Header";
import "./Header.css";

export function AppLayout() {
  return (
    <div>
      <Header></Header>
      <BodyLayout></BodyLayout>
    </div>
  );
}
