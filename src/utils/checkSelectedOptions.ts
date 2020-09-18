export default (options: Array<string>, selectedOption: string) => {
  //checking if selected option is valid
  const selectedOptionIsValid = options.findIndex(
    (option) => option === selectedOption
  );
  if (selectedOptionIsValid >= 0) {
    return true;
  }
};
