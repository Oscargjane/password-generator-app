import { useState } from 'react';
import {
  StyledSliderContainer,
  StyledSliderHeader,
  StyledSlider,
} from '../styles/Slider.styled';

function Slider({ initial, max, id, label }) {
  const [passwordLength, setPasswordLength] = useState(0);
  const getPercentage = (currentLength, maxLength = max) =>
    (currentLength * 100) / maxLength;
  const handlePasswordLengthChange = event =>
    setPasswordLength(event.target.value);

  return (
    <StyledSliderContainer>
      <StyledSliderHeader htmlFor={id}>
        {label}
        <span>{passwordLength}</span>
      </StyledSliderHeader>
      <StyledSlider
        percentage={getPercentage}
        defaultValue={passwordLength}
        min={initial}
        max={max}
        name={id}
        id={id}
        onChange={handlePasswordLengthChange}
      />
    </StyledSliderContainer>
  );
}

export default Slider;
