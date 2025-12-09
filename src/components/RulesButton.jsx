import Button from "./Button";

function RulesButton({ dispatch }) {
  return (
    <div className="rulesBtnWrapper" style={{}}>
      <Button
        className="rulesBtn"
        onClick={() => dispatch({ type: "open/rules" })}
      >
        RULES
      </Button>
    </div>
  );
}

export default RulesButton;
