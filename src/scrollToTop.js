//made this function because react doesnt scroll to top each time I navigate to a new page.
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  //based on the page's location for that path
  const { pathname } = useLocation();

  //always scroll to starting position
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  //nothing to return since this is just a scroll function
  return null;
}
