import React from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";

export default (props: any) => {
  return (
    <React.Fragment>
      <Header>
        <Main></Main>
      </Header>
    </React.Fragment>
  );
};
