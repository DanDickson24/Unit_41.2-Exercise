const App = () => (
    <div>
      <h1>Part 2 - Tweet App</h1>
      <Tweet
        username="user1"
        name="John Doe"
        date="August 20, 2023"
        message="test tweet 1"
      />
      <Tweet
        username="user2"
        name="Jane Smith"
        date="August 21, 2023"
        message="here is another tweet"
      />
      <Tweet
        username="user3"
        name="Alice Johnson"
        date="August 22, 2023"
        message="look at my tweet"
      />
    </div>
  );

  ReactDOM.render(<App />, document.getElementById("root"))