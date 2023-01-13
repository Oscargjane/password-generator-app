import {
  StyledCheckboxContent,
  StyledCheckbox,
} from '../styles/Checkbox.styled';

function Checkbox({ checkboxName, label, isChecked, onCheckedChange }) {
  return (
    <StyledCheckboxContent>
      <StyledCheckbox
        name={checkboxName}
        checked={isChecked}
        onChange={onCheckedChange}
      />
      {label}
    </StyledCheckboxContent>
  );
}

export default Checkbox;
