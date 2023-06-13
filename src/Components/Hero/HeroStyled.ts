import styled from "styled-components";

export const HeroContainer = styled.div`
  padding-bottom: ${(props) => props.theme.space[17]};

  background-color: ${(props) => props.theme.color.background};

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }

  @media (min-width: 1440px) {
    justify-content: center;
    align-items: center;

    padding-top: 145px;
    padding-bottom: 0;
    margin-left: 140px;
    margin-right: 140px;
    margin-bottom: 96px;

    background-color: ${(props) => props.theme.color.white};
  }
`;

export const Image = styled.img`
  position: absolute;
  bottom: 0;
  left: 10%;

  margin-right: auto;
  margin-left: auto;

  @media (min-width: 768px) {
    left: -10%;
  }

  @media (min-width: 1440px) {
    left: 0;
  }
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

  @media (min-width: 768px) {
    width: 290px;

    margin-bottom: 0;
  }

  @media (min-width: 1440px) {
    width: 564px;
    height: 388px;

    margin-bottom: 0;
    margin-right: 131px;
  }
`;

export const TextContainer = styled.div`
  padding-right: ${(props) => props.theme.space[6]};
  padding-left: ${(props) => props.theme.space[6]};

  @media (min-width: 768px) {
    width: 331px;
  }
`;

export const Title = styled.h2`
  margin-bottom: ${(props) => props.theme.space[8]};

  font-size: ${(props) => props.theme.size.SP};
  font-weight: ${(props) => props.theme.weight.bold};
  line-height: 1;
  color: ${(props) => props.theme.color.gun};

  @media (min-width: 1440px) {
    font-size: ${(props) => props.theme.size.XXM};
  }
`;

export const Text = styled.p`
  line-height: 1.5;
  color: ${(props) => props.theme.color.electric};
  font-size: ${(props) => props.theme.size.N};
`;
