import React from "react";
export default (props: any) => {
  return (
    <div className="w-full text-center min-h-screen rounded bg-background bg-cover ">
      <div className="text-4xl p-8">Quizzy</div>
      {props.children}
    </div>
  );
};
