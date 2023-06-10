import styled from "styled-components";

export const HeroContainer = styled.div`
  background-color: ${(props) => props.theme.color.background};
`;

export const Image = styled.img`
position: absolute;
bottom: 0;
left: 10%;

margin-right: auto;
margin-left: auto;
`;

export const ImageContainer = styled.div`
  position: relative;

  width: 375px;
  height: 257.98px;
  margin-bottom: ${(props) => props.theme.space[10]};

  background: linear-gradient(
    290.1deg,
    #d6e6fe 0%,
    rgba(214, 252, 254, 0) 100%
  );

  border-radius: ${(props) => props.theme.radius[5]};
`;

export const TextContainer = styled.div`
  padding-right: ${(props) => props.theme.space[6]};
  padding-left: ${(props) => props.theme.space[6]};
`;

export const Title = styled.h2`
  margin-bottom: ${(props) => props.theme.space[8]};

  font-size: 32px;
  font-weight: ${(props) => props.theme.weight.bold};
  line-height: 1;
  color: ${(props) => props.theme.color.gun};
`;

export const Text = styled.p`
  line-height: 1.5;
  color: ${(props) => props.theme.color.electric};
  font-size: ${(props) => props.theme.size.N};
`;
