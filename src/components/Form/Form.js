import { useState } from "react";
import { StyledForm } from "./StyledForm";
import Input from "../Input/Input";
import Button from "../Button/Button";
import UsersList from "../UsersList/UsersList";

export default function Form() {
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
  const [credentials, setCredentials] = useState(INITIAL_CREDENTIALS);
  const [errors, setErrors] = useState(INITIAL_ERRORS);
  const [newUsers, setNewUsers] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setCredentials({
      ...credentials,
      [e.target.name]: value,
    });
    e.target.value.length < 3 ? setErrors({ ...errors, [e.target.name]: "Za mało liter!" }) : setErrors({ ...errors, [e.target.name]: "" });
    // e.target.id === "password" && e.target.value.length < 8 ? setErrors({ ...errors, password: "Hasło musi mieć więcej niż 8 liter!" }) : setErrors({ ...errors, password: "" });
    // DRUGA WALIDACJA NIE CHCE DZIAŁAĆ, ZAPEWNE KOLEJNE W TEN SPOSÓB TEŻ
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (Object.values(credentials).every((credential) => credential !== "") && Object.values(errors).every((error) => error === "")) {
      setNewUsers([...newUsers, credentials]);
      setCredentials(INITIAL_CREDENTIALS);
      setErrors(INITIAL_ERRORS);
    }
  };

  return (
    <>
      <StyledForm onSubmit={submitForm}>
        <Input name="username" onChange={handleChange} error={errors.username} value={credentials.username} type="text" />
        <Input name="email" onChange={handleChange} error={errors.email} value={credentials.email} type="text" />
        <Input name="password" onChange={handleChange} error={errors.password} value={credentials.password} type="password" />
        <Button name="Add" />
        {JSON.stringify(newUsers)}
      </StyledForm>
      <UsersList newUsers={newUsers} />
    </>
  );
}
