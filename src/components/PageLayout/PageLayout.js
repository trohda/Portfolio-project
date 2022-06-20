import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./PageLayoutStles.css";

const PageLayout = (props) => {
  const [y, setY] = useState(window.scrollY);

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  return (
    <div className="pageLayoutWrapper">
      <div className="blackStripe">
        {y > 250 && <span className="blackStripeMyName">TOMASZ ROHDA</span>}
        <hr />
      </div>
      {props.children}
    </div>
  );
};

export default PageLayout;
