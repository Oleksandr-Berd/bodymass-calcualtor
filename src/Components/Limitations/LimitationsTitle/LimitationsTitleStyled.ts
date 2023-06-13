import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: ${(props) => props.theme.space[18]};

  @media (min-width: 1440px) {
    grid-column: 1 / span 2;

    width: 464px;

    text-align: left;
  }
`;

export const Title = styled.h3`
  margin-bottom: ${(props) => props.theme.space[8]};

  color: ${(props) => props.theme.color.gun};
  font-size: ${(props) => props.theme.size.SP};
  line-height: 1.09;
  font-weight: ${(props) => props.theme.weight.bold};
`;

export const Text = styled.p`
  color: ${(props) => props.theme.color.electric};
  font-size: ${(props) => props.theme.size.N};
  line-height: 1.5;
`;
