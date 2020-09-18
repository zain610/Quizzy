import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import List from "../../components/List";
import API from "../../utils/api";

export default (props: any) => {
  //Application state
  const [appState, setAppState] = useState({
    loading: false,
    trivia: null,
    score: 0,
    questionNumber: 0,
    selected: false,
    gameOver: false,
  });
  //asynchronously fetch data once the component is mounted.
  useEffect(() => {
    setAppState({
      ...appState,
      loading: true,
    });

    API().then((data) =>
      setAppState({ ...appState, loading: false, trivia: data })
    );
  }, [setAppState]);

  const increaseScore = () => {
    setAppState({ ...appState, score: appState.score + 1, selected: true });
  };
  const increaseQuestionNumber = () => {
    //increase questions while number is less than 5
    const currentQuestionNumber = appState.questionNumber;
    setAppState({
      ...appState,
      questionNumber: appState.questionNumber + 1,
      selected: false,
    });
    //trigger game over once the user reaches teh 4th question ( 2nd last )
    if (currentQuestionNumber === 3) {
      setAppState({
        ...appState,
        questionNumber: appState.questionNumber + 1,
        gameOver: true,
        selected: false,
      });
    }
  };
  const setSelected = (value: boolean) => {
    setAppState({ ...appState, selected: value });
  };

  const ListLoading = WithListLoading(List);
  return (
    <React.Fragment>
      <Header>
        <ListLoading
          increaseScore={increaseScore}
          increaseQuestionNumber={increaseQuestionNumber}
          isLoading={appState.loading}
          trivia={appState.trivia}
          questionNumber={appState.questionNumber}
          selected={appState.selected}
          setSelected={setSelected}
          score={appState.score}
          gameover={appState.gameOver}
        />
      </Header>
    </React.Fragment>
  );
};

/**
 * A HOC that handles the UI of the app until its finished loading the API.
 * Using the state of isLoading to check if the API is done calling the endpoint
 * The component passed in as a parameter is rendered with the remaining props.
 * @param Component Component to be rendered with API data.
 */

function WithListLoading(Component: any) {
  return function WihLoadingComponent({ isLoading, ...props }: any) {
    if (!isLoading) return <Component {...props} />;
    return (
      <p style={{ textAlign: "center", fontSize: "40px" }}>
        Hold on, fetching data may take some time :)
      </p>
    );
  };
}
