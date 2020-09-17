import React, { useState } from "react";
import Button from "./Button";

export default () => {
  const trivia = {
    question: "What is the largest continent in the world?",
    options: ["Australia", "Asia", "North America", "Europe"],
    correct: 1,
    reason:
      "Asia is the larges continent. It covers 9% of the Earth's total surface area (or 30% of its land area), and has the longest coastline, at 62,800 kilometres",
  };
  const [selected, setSelected] = useState(false);
  const handleOnClick = (e: any) => {
    //get the target element
    const name = e.target.id;
    //set select to true
    const selectedOptionIsValid = trivia.options.find(
      (option) => option === name
    );
    if (selectedOptionIsValid !== undefined) {
      setSelected(true);
    }
  };

  const displayOptions = trivia.options.map((item, index) => {
    let color = "blue";
    return (
      <Button key={index} disabled={selected ? true : false} color={color}>
        {item}
      </Button>
    );
  });
  return (
    <div
      className="mx-2 lg:mx-96 w-100 justify-center h-88 bg-gray-300 rounded"
      onClick={handleOnClick}
    >
      <h1 className="m-4 p-2 text-3xl">Q. Which is the largest Continent?</h1>
      {displayOptions}
    </div>
  );
};
