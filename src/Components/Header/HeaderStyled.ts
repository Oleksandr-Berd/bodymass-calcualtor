import styled from "styled-components";

export const Header = styled.header`
  padding-top: ${(props) => props.theme.space[8]};
  padding-bottom: 217px;
  padding-right: ${(props) => props.theme.space[6]};
  padding-left: ${(props) => props.theme.space[6]};

  text-align: center;

  background: linear-gradient(
    290.1deg,
    #d6e6fe 0%,
    rgba(214, 252, 254, 0) 100%
  );
  border-radius: 0px 0px 35px 35px;
`;

export const Title = styled.h1`
  margin-top: ${(props) => props.theme.space[6]};
  margin-bottom: ${(props) => props.theme.space[6]};

  color: ${(props) => props.theme.color.gun};
  font-size: ${(props) => props.theme.size.XXM};
  font-weight: ${(props) => props.theme.weight.bold};
  line-height: 1.1;
`;

export const Text = styled.p`
  color: ${(props) => props.theme.color.electric};
  font-size: ${(props) => props.theme.size.N};
  line-height: 1.5;
`;
