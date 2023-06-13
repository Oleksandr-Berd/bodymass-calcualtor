import styled from "styled-components";

export const Item = styled.li`
  padding-top: ${(props) => props.theme.space[6]};
  padding-bottom: ${(props) => props.theme.space[6]};
  padding-left: ${(props) => props.theme.space[6]};
  padding-right: ${(props) => props.theme.space[6]};

  margin-bottom: ${(props) => props.theme.space[4]};

  background: ${(props) => props.theme.color.white};

  box-shadow: 0px 4px 4px 0px #00000040;

  border-radius: ${(props) => props.theme.radius[3]};

  @media (min-width: 768px) {
    margin-bottom: 0;
    padding-top: ${(props) => props.theme.space[8]};
    padding-bottom: ${(props) => props.theme.space[8]};
    padding-left: ${(props) => props.theme.space[8]};
    padding-right: ${(props) => props.theme.space[8]};

    &:nth-child(5) {
      grid-column: 1 / span 2;
      margin-left: ${(props) => props.theme.space[13]};
      margin-right: ${(props) => props.theme.space[13]};
    }
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: ${(props) => props.theme.space[4]};
`;

export const Title = styled.h3`
  margin-left: ${(props) => props.theme.space[4]};

  font-weight: ${(props) => props.theme.weight.bold};
  font-size: ${(props) => props.theme.size.S};
  line-height: 1.21;
`;

export const Text = styled.p``