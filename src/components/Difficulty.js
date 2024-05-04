const Difficulty = () => {
  return (
    <div>
        <input type="radio" name="diff" id="easy" value="Easy"/>
      <label for="easy">Easy</label>
        <input type="radio" name="diff" id="medium" value="Medium"/>
      <label for="medium">Medium</label>
      <input type="radio" name="diff" id="hard" value="Hard"/> <label for="hard">Hard</label>
    </div>
  );
};

export default Difficulty;
