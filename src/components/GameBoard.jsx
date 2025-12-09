function GameBoard({ dispatch }) {
  function handleScissors() {
    dispatch({ type: "choice/scissors" });
  }
  function handlePaper() {
    dispatch({ type: "choice/paper" });
  }
  function handleRock() {
    dispatch({ type: "choice/rock" });
  }
  function handleLizard() {
    dispatch({ type: "choice/lizard" });
  }
  function handleSpoke() {
    dispatch({ type: "choice/spock" });
  }

  return (
    <main className="gameBoard">
      <div className="gameCircle">
        <div className="shapeWrapper">
          <img
            src="./bg-pentagon.svg"
            className="pentagon-shape"
            alt="pentagon-shape"
            draggable={false}
          />
          <div
            className="logoWrapper golbalLogoWrapper"
            onClick={handleScissors}
          >
            <img
              src="./icon-scissors.svg"
              className="icon-scissors globalIcon"
            />
          </div>
          <div className="spockWrapper golbalLogoWrapper" onClick={handleSpoke}>
            <img src="./icon-spock.svg" className="icon-spock globalIcon" />
          </div>
          <div className="paperWrapper golbalLogoWrapper" onClick={handlePaper}>
            <img src="./icon-paper.svg" className="icon-paper globalIcon" />
          </div>
          <div
            className="lizardWrapper golbalLogoWrapper"
            onClick={handleLizard}
          >
            <img src="./icon-lizard.svg" className="icon-lizard globalIcon" />
          </div>
          <div className="rockWrapper golbalLogoWrapper" onClick={handleRock}>
            <img src="./icon-rock.svg" className="icon-rock globalIcon" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default GameBoard;
