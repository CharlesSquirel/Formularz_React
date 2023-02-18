import { useState } from "react";
import { StyledForm } from "./StyledForm";
import Input from "../Input/Input";
import Button from "../Button/Button";

const INITIAL_CREDENTIALS = {
  username: "",
  email: "",
  password: "",
};

const INITIAL_ERRORS = {
  username: "",
  email: "",
  password: "",
};

const INITIAL_TOUCHES = {
  username: false,
  email: false,
  password: false,
};

export default function Form() {
  const [credentials, setCredentials] = useState(INITIAL_CREDENTIALS);
  const [errors, setErrors] = useState(INITIAL_ERRORS);
  const [isTouched, setIsTouched] = useState(INITIAL_TOUCHES);

  const handleChange = (e) => {
    const value = e.target.value;
    setCredentials({
      ...credentials,
      [e.target.name]: value,
    });
    e.target.value.length < 3 ? setErrors({ ...errors, [e.target.name]: "Za mało liter!" }) : setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleBlur = (e) => {
    setIsTouched({
      ...isTouched,
      [e.target.name]: true,
    });
    console.log(isTouched);
  };

  const submitForm = (e) => {
    e.preventDefault();
  };

  return (
    <StyledForm onSubmit={submitForm}>
      <Input name="username" onChange={handleChange} error={errors.username} onBlur={(e) => console.log(e.target)} />
      <Input name="email" onChange={handleChange} error={errors.email} onBlur={handleBlur} />
      <Input name="password" onChange={handleChange} error={errors.password} onBlur={handleBlur} />
      <Button name="Submit" />
    </StyledForm>
  );
}
