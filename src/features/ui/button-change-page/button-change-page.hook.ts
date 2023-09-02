import { useLocation } from "wouter"

export const useChangePage = () => {

    const [location, setLocation] = useLocation();
    
    function handleChangePage() {
        location === "/" ? setLocation("/todos") : setLocation("/")
    }

    return { location, handleChangePage }
}