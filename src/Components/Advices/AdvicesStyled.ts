import styled from "styled-components";

export const AdvicesContainer = styled.div`
  padding-top: ${(props) => props.theme.space[18]};
  padding-bottom: ${(props) => props.theme.space[18]};
  padding-left: ${(props) => props.theme.space[5]};
  margin-bottom: 120px;

  background: linear-gradient(
    to bottom,
    #d6e6fe 0%,
    rgba(214, 252, 254, 0) 100%
  );

  @media (min-width: 1440px) {
    padding-left: 140px;
    padding-right: 140px;
    padding-bottom: 96px;
    padding-top: 72px;
    margin-right: ${(props) => props.theme.space[6]};
    margin-left: ${(props) => props.theme.space[6]};

    /* opacity: 0.25; */
    background-blend-mode: pass-through;
    background-color: linear-gradient(
      to bottom,
      #d6e6fe 0%,
      rgba(214, 252, 254, 25%) 25%
    );
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    border-radius: 35px;
  }
`;

export const List = styled.ul`
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row;
  }
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

  @media (min-width: 1440px) {
    display: block;

    padding-left: 0;
    padding-right: 0;

    &:not(:last-child) {
      margin-right: ${(props) => props.theme.space[8]};
    }
  }
`;

export const TextContainer = styled.div`
  @media (min-width: 768px) {
    margin-left: ${(props) => props.theme.space[19]};
  }

  @media (min-width: 1440px) {
    margin-left: 0;
  }
`;

export const Title = styled.h3`
  margin-bottom: ${(props) => props.theme.space[6]};
  margin-top: ${(props) => props.theme.space[8]};

  font-weight: ${(props) => props.theme.weight.bold};
  font-size: ${(props) => props.theme.size.M};
  line-height: 1.21;
  color: ${(props) => props.theme.color.gun};
`;

export const Text = styled.p`
  line-height: 1.5;
  font-size: ${(props) => props.theme.size.N};
  color: ${(props) => props.theme.color.electric};
`;
