import {
  StyledCheckboxContent,
  StyledCheckbox,
} from '../styles/Checkbox.styled';

function Checkbox(props) {
  return (
    <StyledCheckboxContent>
      <StyledCheckbox />
      {props.label}
    </StyledCheckboxContent>
  );
}

export default Checkbox;
