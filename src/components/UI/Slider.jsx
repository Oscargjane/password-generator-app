import {
  StyledSliderContainer,
  StyledSliderHeader,
  StyledSlider,
} from '../styles/Slider.styled';

function Slider({
  initialValue,
  maxValue,
  currentLength,
  label,
  id,
  onLengthChange,
}) {
  const getPercentage = (currentLength, maxLength = maxValue) =>
    (currentLength * 100) / maxLength;

  return (
    <StyledSliderContainer>
      <StyledSliderHeader htmlFor={id}>
        {label}
        <span>{currentLength}</span>
      </StyledSliderHeader>
      <StyledSlider
        percentage={getPercentage}
        defaultValue={currentLength}
        min={initialValue}
        max={maxValue}
        name={id}
        onChange={onLengthChange}
      />
    </StyledSliderContainer>
  );
}

export default Slider;
