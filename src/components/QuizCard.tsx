import React from "react";
import Button from "./Button";
import checkSelectedOption from "../utils/checkSelectedOptions";

type QuizCard = {
  trivia: any;
  increaseScore: Function;
  increaseQuestionNumber: () => void;
  setSelected: Function;
  selected: boolean;
  score: number;
  gameover: boolean;
};
export default ({
  trivia,
  increaseScore,
  increaseQuestionNumber,
  setSelected,
  selected,
  score,
  gameover,
}: QuizCard) => {
  const handleOnClick = (e: any) => {
    const name = e.target.id;
    if (checkSelectedOption(trivia.options, name)) {
      setSelected(true);
      if (name === trivia.correct_answer) {
        //user selected correct option -> trigger increase score and display answer
        increaseScore();
      }
    }
  };

  /**
   * This method returns a list of buttons created by passing options from props.
   */
  const displayOptions = trivia.options.map((item: any, index: number) => {
    let color = item === trivia.correct_answer ? "green" : "red";
    return (
      <Button
        selectedColor={color}
        key={index}
        disabled={selected ? true : false}
      >
        {item}
      </Button>
    );
  });
  return (
    <div
      className="mx-2 lg:mx-96 my-18 w-100 justify-center p-4 h-auto bg-gray-300 rounded items-center"
      onClick={handleOnClick}
    >
      <div className="flex-grow">
        <h1
          className="m-4 p-2 text-3xl"
          dangerouslySetInnerHTML={{ __html: trivia.question }}
        ></h1>
        {displayOptions}
      </div>
      <div className="m-8 justify-between flex">
        <h1 className=" w-40 p-4 h-auto bg-gray-800 rounded  text-white items-center">
          Score: {score}
        </h1>
        <button
          onClick={increaseQuestionNumber}
          className={
            `w-40 p-4 h-auto bg-gray-800 rounded text-white items-center` +
            (gameover && ` opacity-50 cursor-not-allowed`)
          }
        >
          Next
        </button>
      </div>
      {gameover && <h1>Please restart game to play again</h1>}
    </div>
  );
};
