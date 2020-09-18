import React from "react";
export default (props: any) => {
  return (
    <div className="w-full text-center my-8 h-full rounded bg-background bg-cover ">
      <div className="text-4xl p-8">Quizzy</div>
      {props.children}
    </div>
  );
};
