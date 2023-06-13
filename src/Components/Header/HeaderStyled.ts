import styled from "styled-components";

export const Container = styled.div`
  background-color: #e7f5fe;

  @media (min-width: 1440px) {
    border-bottom-right-radius: 35px;
    border-bottom-left-radius: 35px;
  }
`;

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

  @media (min-width: 1440px) {
    padding-top: 75px;
    padding-left: 116px;

    text-align: left;
  }
`;

export const TextContainer = styled.div`
  @media (min-width: 768px) {
    width: 465px;

    margin-right: 397px;
    margin-top: 127px;
  }
`;

export const Title = styled.h1`
  margin-top: ${(props) => props.theme.space[6]};
  margin-bottom: ${(props) => props.theme.space[6]};

  color: ${(props) => props.theme.color.gun};
  font-size: ${(props) => props.theme.size.XXM};
  font-weight: ${(props) => props.theme.weight.bold};
  line-height: 1.1;

  @media (min-width: 768px) {
    width: ${(props) => props.theme.percentage[7]};

    margin-right: auto;
    margin-left: auto;
    margin-top: ${(props) => props.theme.space[19]};
  }

  @media (min-width: 1440px) {
   margin: 0;
   margin-bottom:35px;
  }
`;

export const Text = styled.p`
  color: ${(props) => props.theme.color.electric};
  font-size: ${(props) => props.theme.size.N};
  line-height: 1.5;
`;
