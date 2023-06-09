import styled from "styled-components";

export const SharedLayout = styled.div`
  min-width: ${(props) => props.theme.width.mobile};

  background-color: #E7F5FE;

  @media (min-width: 768px) {
    min-width: ${(props) => props.theme.width.tablet};
  }

  @media (min-width: 1440px) {
    min-width: ${(props) => props.theme.width.desktop};
  }
`;
