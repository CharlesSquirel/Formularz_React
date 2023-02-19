import { StyledErrorParagraph, StyledInp, StyledLabel, Wrapper } from "./StyledInput";
const Input = ({ name, onChange, error, value, type }) => {
  return (
    <Wrapper>
      <StyledLabel htmlFor={name}>{name}</StyledLabel>
      <StyledInp name={name} onChange={onChange} type={type} placeholder={name} id={name} value={value} />
      {error && <StyledErrorParagraph>{error}</StyledErrorParagraph>}
    </Wrapper>
  );
};

export default Input;
