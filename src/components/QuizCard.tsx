import React, { useState } from "react";
import Button from "./Button";
import checkSelectedOption from "../utils/checkSelectedOptions";

type QuizCard = {
  trivia: any;
  increaseScore: Function;
  increaseQuestionNumber: Function;
  setSelected: Function;
  selected: boolean;
};
export default ({
  trivia,
  increaseScore,
  increaseQuestionNumber,
  setSelected,
  selected,
}: QuizCard) => {
  const handleOnClick = (e: any) => {
    const name = e.target.id;
    console.log(trivia);
    if (checkSelectedOption(trivia.options, name)) {
      setSelected(true);
      if (name === trivia.correct_answer) {
        //user selected correct option -> trigger increase score and display answer
        increaseScore();
      }
      console.log(trivia.correct_answer, name, trivia.correct_answer === name);
    }
  };

  /**
   * This method returns a list of buttons created by passing options from props.
   */
  const displayOptions = trivia.options.map((item: any, index: number) => {
    let color = "red";
    if (item === trivia.correct_answer) {
      color = "green";
    }
    console.log(selected);
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
      className="mx-2 lg:mx-96 w-100 justify-center p-4 h-auto bg-gray-300 rounded"
      onClick={handleOnClick}
    >
      <h1
        className="m-4 p-2 text-3xl"
        dangerouslySetInnerHTML={{ __html: trivia.question }}
      ></h1>
      {displayOptions}
    </div>
  );
};
