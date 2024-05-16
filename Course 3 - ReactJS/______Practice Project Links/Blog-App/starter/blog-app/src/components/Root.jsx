import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import BottomBar from "../components/BottomBar";
import { SearchProvider} from "./SearchContext";

export default function Root() {
  return (
    <>
      <SearchProvider>
        <NavBar />
        <Outlet />
        <BottomBar />
      </SearchProvider>
    </>
  );
}
