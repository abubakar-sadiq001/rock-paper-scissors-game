import { useEffect, useState } from "react";

function Header({ score }) {
  const [userScore, setUserScore] = useState();

  useEffect(
    function () {
      setTimeout(function () {
        setUserScore(score);
      }, 1500);
    },
    [score]
  );

  return (
    <nav>
      {/* <div> */}
      <img
        src="./logo-bonus.svg"
        alt="logo image"
        className="logo"
        width="130px"
        draggable={false}
      />
      {/* </div> */}
      <div className="scoreWrapper">
        <p>SCORE</p>
        <div className="score">{userScore}</div>
      </div>
    </nav>
  );
}

export default Header;
