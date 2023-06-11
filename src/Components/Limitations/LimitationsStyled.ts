import styled from "styled-components"

export const Container = styled.div`
padding-top: ${props => props.theme.space[17]};
padding-bottom: 96px;
padding-left: ${props => props.theme.space[5]};
padding-right: 29px;

text-align: center;

  background-color: ${(props) => props.theme.color.background};
`;