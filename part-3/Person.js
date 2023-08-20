const Person = (props) => {
  const { name, age, hobbies } = props;

  return (
    <div>
      <p>Learn some information about {name.substring(0, 6)}.</p>
      {age > 18 ? <h3>Please go vote!</h3> : <h3>You must be 18.</h3>}
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
};

