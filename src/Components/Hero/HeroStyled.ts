import styled from "styled-components"

export const HeroContainer = styled.div`
  background-color: ${props => props.theme.color.background}
`;

export const ImageContainer = styled.div`
  text-align: center;

  background: linear-gradient(
    290.1deg,
    #d6e6fe 0%,
    rgba(214, 252, 254, 0) 100%
  );

  border-radius: ${props => props.theme.radius[5]};
`;