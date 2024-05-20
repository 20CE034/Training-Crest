import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import BottomBar from "../components/BottomBar";
import { SearchProvider } from "../context/SearchContext";
import { useLoadingContext } from "../context/LoadingContext";
import GradientCircularProgress from "./GradientCircularProgress";

export default function Root() {
  const { isLoading, setIsLoading } = useLoadingContext();

  useEffect(() => {
    // Simulate an API call or any async operation
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the time as needed
  }, [setIsLoading]);

  return (
    <SearchProvider>
      <NavBar />
      {isLoading ? <GradientCircularProgress /> : <Outlet />}
      <BottomBar />
    </SearchProvider>
  );
}
