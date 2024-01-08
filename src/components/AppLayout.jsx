import { BodyLayout } from "./Body/Body";
import { Header } from "./Header/Header";
import { SearchBar } from "./SearchBar/SearchBar";
import "./Header/Header.css";

export function AppLayout() {
  return (
    <div>
      <Header></Header>
      <SearchBar></SearchBar>
      <BodyLayout></BodyLayout>
    </div>
  );
}
