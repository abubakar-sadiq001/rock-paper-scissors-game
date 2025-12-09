import { useEffect, useState } from "react";
import Button from "./Button";

function FinalStage({ playerChoice, computersChoice, status, dispatch }) {
  const [derivedComputerChoice, setDerivedComputerChoice] = useState(false);
  const [timer, setTimer] = useState(false);
  //   console.log(computersChoice);

  useEffect(
    function () {
      setTimeout(function () {
        setTimer(true);
      }, 1500);
    },
    [timer]
  );

  useEffect(
    function () {
      setTimeout(function () {
        setDerivedComputerChoice(true);
      }, 1500);
    },
    [computersChoice]
  );

  function handleRestartGame() {
    dispatch({ type: "choice/restartGame" });
  }

  return (
    <div className="wrapper">
      <div className="usersChoice">
        <p>YOU PICKED</p>
        <div className={`playerChoice ${playerChoice} globalCover`}>
          <img
            src={`./icon-${playerChoice}.svg`}
            className="playerChoiceIcon global"
          />
        </div>
      </div>
      <div>
        {timer === true ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div className="middle-wrapper">
              <h1 className="status">{status}</h1>
              <Button className={"playAgainButton"} onClick={handleRestartGame}>
                PLAY AGAIN
              </Button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="">
        <p>THE HOUSE PICKED</p>
        {derivedComputerChoice ? (
          <div className={`computerChoice ${computersChoice} globalCover`}>
            <img
              src={`./icon-${computersChoice}.svg`}
              className="computerChoiceIcon global"
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default FinalStage;
