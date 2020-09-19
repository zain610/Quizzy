/**
 * Header component used for setting the background UI of the application.
 */

import React from "react";
export default (props: any) => {
  return (
    <div className="w-full text-center min-h-screen rounded bg-background bg-cover pb-16 ">
      <div className="text-4xl p-8">Quizzy</div>
      {props.children}
    </div>
  );
};
