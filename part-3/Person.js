const Person = ({ name, age, hobbies }) => {
  let additionalMsg;

  let generalMsg = "Learn some information about this person";

  if (age > 18) {
    additionalMsg = "please go vote!";
  } else {
    additionalMsg = "you must be 18";
  }

  return (
    <div>
      <p>{generalMsg}</p>

      <p>Name: {name.length > 8 ? name.substring(0, 6) : name}</p>
      <p>Age: {age}</p>
      <p>Hobbies:</p>
      <ul>
        {hobbies.map((hobby) => (
          <li>{hobby}</li>
        ))}
      </ul>

      <h3>{additionalMsg}</h3>
    </div>
  );
};
