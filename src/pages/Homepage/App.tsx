import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import QuizCard from "../../components/QuizCard";
import API from "../../utils/api";

export default (props: any) => {
  const [appState, setAppState] = useState({
    loading: false,
    trivia: null,
    score: 0,
    questionNumber: 0,
    selected: false,
  });
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
    setAppState({
      ...appState,
      questionNumber: appState.questionNumber + 1,
      selected: false,
    });
  };
  const setSelected = (value: boolean) => {
    console.log("triggered select callback", value);
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
        />
        <h1>Score: {appState.score}</h1>
      </Header>
    </React.Fragment>
  );
};

function WithListLoading(Component: any) {
  return function WihLoadingComponent({ isLoading, ...props }: any) {
    if (!isLoading) return <Component {...props} />;
    return (
      <p style={{ textAlign: "center", fontSize: "30px" }}>
        Hold on, fetching data may take some time :)
      </p>
    );
  };
}
const List = (props: any) => {
  const {
    trivia,
    increaseScore,
    increaseQuestionNumber,
    questionNumber,
    selected,
    setSelected,
  } = props;
  if (!trivia || trivia.length === 0) return <p>No repos, sorry</p>;
  return (
    <div>
      <QuizCard
        increaseScore={increaseScore}
        increaseQuestionNumber={increaseQuestionNumber}
        trivia={trivia[questionNumber]}
        selected={selected}
        setSelected={setSelected}
      ></QuizCard>
    </div>
  );
};
