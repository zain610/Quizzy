//fetch informaiton from opentdb

export default async () => {
  let results = await fetchTriviaQuestions();
  let trivia = results.map((item: any) => {
    const { correct_answer, incorrect_answers, question } = item;
    let options = shuffle([...incorrect_answers, correct_answer]);
    return {
      question,
      options,
      correct_answer,
    };
  });
  return trivia;
};

const fetchTriviaQuestions = async (amount = 5, difficulty = "easy") => {
  const url = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
  const response = await fetch(url);
  const { results } = await response.json();
  return results;
};

function shuffle(array: Array<string>) {
  return array.sort(() => Math.random() - 0.5);
}
