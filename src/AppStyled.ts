import styled from "styled-components"

export const HeaderContainer = styled.div`
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-left: ${(props) => props.theme.space[6]};
    margin-bottom: 65px;
  }
`;