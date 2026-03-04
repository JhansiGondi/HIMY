import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop component ensures the window scrolls appropriately whenever the
 * route or hash changes. If a hash is present and corresponds to an element
 * ID, the page will scroll to that element; otherwise it resets to the top.
 *
 * Place this inside the Router (e.g. in App.js) so every navigation triggers
 * the effect.
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        // scroll to the target element (smooth for UX)
        element.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }

    // default fallback: scroll to top of page
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
