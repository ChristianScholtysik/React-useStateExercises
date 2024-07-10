import { useState } from "react";
import "./Form.css";

const Form = () => {
  const [firstName, setFirstName] = useState<string>("");

  const getFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };

  const [lastName, setLastName] = useState<string>("");
  const getLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const [email, setEmail] = useState<string>("");
  const getEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <div className="input-output">
      <div className="form-wrapper">
        <input
          onChange={getFirstName}
          type="text"
          placeholder="Vorname"
          value={firstName}
        />
        <input
          onChange={getLastName}
          type="text"
          placeholder="Nachname"
          value={lastName}
        />
        <input
          onChange={getEmail}
          type="text"
          placeholder="Email"
          value={email}
        />
      </div>
      <div className="output">
        <li>Vorname: {firstName}</li>
        <li>Nachname: {lastName}</li>
        <li>Email: {email}</li>
      </div>
    </div>
  );
};

export default Form;
