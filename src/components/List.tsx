import React from "react";
import QuizCard from "./QuizCard";

const List = (props: any) => {
  const {
    trivia,
    increaseScore,
    increaseQuestionNumber,
    questionNumber,
    selected,
    setSelected,
    score,
    gameover,
  } = props;
  if (!trivia || trivia.length === 0) return <p>No trivia questions, sorry</p>;
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <QuizCard
        increaseScore={increaseScore}
        increaseQuestionNumber={increaseQuestionNumber}
        trivia={trivia[questionNumber]}
        selected={selected}
        setSelected={setSelected}
        score={score}
        gameover={gameover}
      ></QuizCard>
    </div>
  );
};

export default List;
