import { useEffect } from "react";
import { useLocation } from "react-router-dom";

type Props = {
  offset?: number; // height of fixed header
};

const ScrollToHash = ({ offset = 88 }: Props) => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;

    // If no hash, do nothing (or you can scroll to top on route changes if you want)
    if (!hash) return;

    const id = hash.replace("#", "");
    if (!id) return;

    // Wait a tick for the page/sections to render
    requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (!el) return;

      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    });
  }, [location.pathname, location.hash, offset]);

  return null;
};

export default ScrollToHash;