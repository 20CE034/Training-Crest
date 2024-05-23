import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import NavBar from "./Bars/NavBar";
import BottomBar from "./Bars/BottomBar";
import { SearchProvider } from "../context/SearchContext";
import { useLoadingContext } from "../context/LoadingContext";
import GradientCircularProgress from "./GradientCircularProgress";
import { useLocation } from "react-router-dom";

export default function Root() {
  const { isLoading, setIsLoading } = useLoadingContext();
  const location = useLocation();

  useEffect(() => {
    // Simulate an API call or any async operation
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust the time as needed
  }, [setIsLoading]);

  return (
    <SearchProvider>
      <NavBar />
      {isLoading ? (
        <GradientCircularProgress />
      ) : (
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }} // Adjust the duration as needed
        >
          <Outlet />
        </motion.div>
      )}
      <BottomBar />
    </SearchProvider>
  );
}
