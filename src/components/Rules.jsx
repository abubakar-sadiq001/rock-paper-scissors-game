import { useEffect } from "react";

function Rules({ dispatch }) {
  useEffect(function () {
    function callBack(e) {
      if (e.code === "Escape") {
        dispatch({ type: "open/rules" });
      }
    }

    document.addEventListener("keydown", callBack); // Add an event to the DOM

    return function () {
      document.removeEventListener("keydown", callBack); // Clear the event after component unmounts
    };
  });

  return (
    <div
      style={{
        display: "flex",
        position: "absolute",
        left: 0,
        right: 0,
        top: "26%",
        zIndex: 20,
      }}
    >
      <div className="rulesWrapper">
        <header>
          <h1>RULES</h1>
          <div
            className="closeIcon"
            onClick={() => dispatch({ type: "open/rules" })}
          >
            <img src="./icon-close.svg" alt="close icon" />
          </div>
        </header>
        <div>
          <img src="./image-rules-bonus.svg" className="ruleImg" />
        </div>
      </div>
    </div>
  );
}

export default Rules;
