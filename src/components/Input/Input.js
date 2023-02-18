import { StyledErrorParagraph, StyledInp, StyledLabel, Wrapper } from "./StyledInput";
const Input = ({ name, onChange, error }) => {
  return (
    <Wrapper>
      <StyledLabel htmlFor={name}>{name}</StyledLabel>
      <StyledInp name={name} onChange={onChange} type="text" placeholder={name} id={name} />
      {error && <StyledErrorParagraph>{error}</StyledErrorParagraph>}
    </Wrapper>
  );
};

export default Input;
