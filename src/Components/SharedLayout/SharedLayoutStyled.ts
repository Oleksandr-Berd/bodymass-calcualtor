import styled from "styled-components";

export const SharedLayout = styled.div`
  min-width: ${(props) => props.theme.width.mobile};


  /* background: #D6E6FE; */

  @media (min-width: 768px) {
    min-width: ${(props) => props.theme.width.tablet};
  }

  @media (min-width: 1440px) {
    min-width: ${(props) => props.theme.width.desktop};
  }
`;
