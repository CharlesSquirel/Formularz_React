import { useState } from "react";
import { StyledForm } from "./StyledForm";
import Input from "../Input/Input";
import Button from "../Button/Button";

const INITIAL_CREDENTIALS = {
  username: "",
  email: "",
  password: "",
};

export default function Form() {
  const [credentials, setCredentials] = useState(INITIAL_CREDENTIALS);

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
    console.log(credentials);
  };

  const submitForm = (e) => {
    e.preventDefault();
  };

  return (
    <StyledForm onSubmit={submitForm}>
      <Input name="username" onChange={handleChange} />
      <Input name="email" onChange={handleChange} />
      <Input name="password" onChange={handleChange} />
      <Button name="Submit" />
    </StyledForm>
  );
}
