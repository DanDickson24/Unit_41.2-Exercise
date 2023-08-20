const App = () => (
  <div>
    <h1>Part 3 - Person App</h1>
    <Person
      name="John Doe"
      age={25}
      hobbies={['Reading', 'Coding', 'Gardening']}
    />
    <Person
      name="Jane Smith"
      age={16}
      hobbies={['Painting', 'Cooking']}
    />
    <Person
      name="Alice Johnson"
      age={30}
      hobbies={['Hiking', 'Photography', 'Playing guitar']}
    />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
