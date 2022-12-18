import styled from 'styled-components';

export const StyledSliderHeader = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.8rem;
  font-weight: 500;

  span {
    font-size: 2.8rem;
    color: ${({ theme }) => theme.colors.primary_500};
  }
`;

export const StyledSliderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 1.8rem;
`;

export const StyledSlider = styled.input.attrs({ type: 'range' })`
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 0.6rem;
  outline: 0;
  border-radius: 0.5rem;
  background: ${props =>
    `linear-gradient(to right, #EABB4E 0%, #EABB4E ${props.percentage(
      props.defaultValue
    )}%, #262626 ${props.percentage(props.defaultValue)}%, #262626 100%)`};

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    border: 2px solid transparent;
    background-color: ${({ theme }) => theme.colors.gray_100};
    cursor: pointer;
    transition: all 300ms;

    :hover {
      border: 2px solid ${({ theme }) => theme.colors.primary_500};
      background-color: ${({ theme }) => theme.colors.gray_800};
    }
  }
`;
