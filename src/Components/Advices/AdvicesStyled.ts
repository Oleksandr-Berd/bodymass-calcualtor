import styled from "styled-components"

export const AdvicesContainer = styled.div`
  padding-top: ${(props) => props.theme.space[18]};
  padding-bottom: ${(props) => props.theme.space[18]};
  padding-left: ${(props) => props.theme.space[5]};

  background: linear-gradient(
    to bottom,
    #d6e6fe 0%,
    rgba(214, 252, 254, 0) 100%
  );


`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: ${(props) => props.theme.space[19]};
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;

    padding-left: ${(props) => props.theme.space[19]};
    padding-right: ${(props) => props.theme.space[19]};
  }
`;

export const TextContainer = styled.div`
  @media (min-width: 768px) {
    margin-left: ${(props) => props.theme.space[19]};
  }
`;

export const Title = styled.h3`
margin-bottom: ${(props) => props.theme.space[6]};
margin-top: ${(props) => props.theme.space[8]};

font-weight: ${props => props.theme.weight.bold};
font-size: ${props => props.theme.size.M};
line-height: 1.21;
color: ${props => props.theme.color.gun};
`;

export const Text = styled.p`
line-height: 1.5;
font-size: ${props => props.theme.size.N};
color: ${props => props.theme.color.electric};
`