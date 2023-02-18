import { StyledInp, StyledLabel, Wrapper } from "./StyledInput";
const Input = ({ name, onChange }) => {
  return (
    <Wrapper>
      <StyledLabel htmlFor={name}>{name}</StyledLabel>
      <StyledInp name={name} onChange={onChange} type="text" placeholder={name} id={name} />
    </Wrapper>
  );
};

export default Input;
