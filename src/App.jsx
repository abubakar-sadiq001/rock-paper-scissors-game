import { useEffect, useReducer } from "react";
import "./index.css";
import GameBoard from "./components/GameBoard";
import Header from "./components/Header";
import FinalStage from "./components/FinalStage";
import Rules from "./components/Rules";
import RulesButton from "./components/RulesButton";

const initialState = {
  score: 10,
  playerChoice: null,
  computerMove: null,
  status: "",
  allMoves: ["scissors", "rock", "paper", "spock", "lizard"],
  startGame: false,
  restartGame: null,
  isClicked: false,
};

function reducer(state, action) {
  //   const playerChoice = "scissors";
  const computerMove =
    state.allMoves[Math.floor(Math.random() * state.allMoves.length)];
  let status;
  let playerScore = state.score;

  if (action.type === "choice/scissors") {
    const playerChoice = "scissors";

    if (playerChoice === computerMove) {
      status = "Tie";
      //   score;
    } else if (computerMove === "paper") {
      status = "You Won";
      playerScore++;
    } else if (computerMove === "rock") {
      status = "You Lose";
      playerScore--;
    } else if (computerMove === "lizard") {
      status = "You Won";
      playerScore++;
    } else if (computerMove === "spock") {
      status = "You Lose";
      playerScore--;
    }

    return {
      ...state,
      playerChoice,
      computerMove,
      status: status,
      score: playerScore,
      startGame: true,
    };
  }
  //   Paper
  if (action.type === "choice/paper") {
    const playerChoice = "paper";

    if (playerChoice === computerMove) {
      status = "Tie";
    } else if (computerMove === "scissors") {
      status = "You Lose";
      playerScore--;
    } else if (computerMove === "rock") {
      status = "You Won";
      playerScore++;
    } else if (computerMove === "lizard") {
      status = "You Lose";
      playerScore--;
    } else if (computerMove === "spock") {
      status = "You Lose";
      playerScore--;
    }

    return {
      ...state,
      playerChoice,
      computerMove,
      status: status,
      score: playerScore,
      startGame: true,
    };
  }

  //   Rock
  if (action.type === "choice/rock") {
    const playerChoice = "rock";

    if (playerChoice === computerMove) {
      status = "Tie";
    } else if (computerMove === "scissors") {
      status = "You Won";
      playerScore++;
    } else if (computerMove === "paper") {
      status = "You Lose";
      playerScore--;
    } else if (computerMove === "lizard") {
      status = "You Won";
      playerScore++;
    } else if (computerMove === "spock") {
      status = "You Lose";
      playerScore--;
    }

    return {
      ...state,
      playerChoice,
      computerMove,
      status: status,
      score: playerScore,
      startGame: true,
    };
  }
  //   Lizard
  if (action.type === "choice/lizard") {
    const playerChoice = "lizard";

    if (playerChoice === computerMove) {
      status = "Tie";
    } else if (computerMove === "scissors") {
      status = "You Lose";
      playerScore--;
    } else if (computerMove === "paper") {
      status = "You Won";
      playerScore++;
    } else if (computerMove === "rock") {
      status = "You Lose";
      playerScore--;
    } else if (computerMove === "spock") {
      status = "You Lose";
      playerScore--;
    }

    return {
      ...state,
      playerChoice,
      computerMove,
      status: status,
      score: playerScore,
      startGame: true,
    };
  }

  //   Spock
  if (action.type === "choice/spock") {
    const playerChoice = "spock";

    if (playerChoice === computerMove) {
      status = "Tie";
    } else if (computerMove === "scissors") {
      status = "You Won";
      playerScore++;
    } else if (computerMove === "paper") {
      status = "You Lose";
      playerScore--;
    } else if (computerMove === "rock") {
      status = "You Won";
      playerScore++;
    } else if (computerMove === "lizard") {
      status = "You Lose";
      playerScore--;
    }

    return {
      ...state,
      playerChoice,
      computerMove,
      status: status,
      score: playerScore,
      startGame: true,
    };
  }

  // restartGame
  if (action.type === "choice/restartGame") {
    return {
      ...state,
      score: state.score,
      playerChoice: null,
      computerMove: null,
      status: "",
      allMoves: ["scissors", "rock", "paper", "spock", "lizard"],
      startGame: false,
      restartGame: null,
    };
  }
  // isClicked
  if (action.type === "open/rules") {
    return {
      ...state,
      isClicked: !state.isClicked,
    };
  }
}

function App() {
  const [
    { playerChoice, computerMove, status, score, startGame, isClicked },
    dispatch,
  ] = useReducer(reducer, initialState);
  // console.log(`${playerChoice} || ${computerMove}  || ${status}`);

  useEffect(function () {
    document.ad;
  }, []);

  return (
    <div className="App">
      <Header score={score} />
      {startGame ? (
        <FinalStage
          playerChoice={playerChoice}
          computersChoice={computerMove}
          status={status}
          dispatch={dispatch}
        />
      ) : (
        <>{<GameBoard dispatch={dispatch} />}</>
      )}
      <RulesButton dispatch={dispatch} />
      {isClicked ? <Rules dispatch={dispatch} /> : ""}
    </div>
  );
}

export default App;
