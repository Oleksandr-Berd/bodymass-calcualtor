import styled from "styled-components"

export const FormContainer = styled.div`
  padding-right: ${(props) => props.theme.space[6]};
  padding-left: ${(props) => props.theme.space[6]};
  /* padding-bottom: ${(props) => props.theme.space[17]}; */

  background-color: #E7F5FE;
`;

export const CustomForm = styled.form`
  transform: translateY(-72px);
  z-index: 10;

  padding-top: ${(props) => props.theme.space[6]};
  padding-bottom: ${(props) => props.theme.space[6]};
  padding-right: ${(props) => props.theme.space[6]};
  padding-left: ${(props) => props.theme.space[6]};

  background-color: ${(props) => props.theme.color.white};

  box-shadow: 16px 32px 56px rgba(143, 174, 207, 0.25);
  border-radius: ${(props) => props.theme.radius[3]};
`;

export const Title = styled.h2`
margin-bottom: ${props => props.theme.space[6]};

font-size: ${props => props.theme.size.M};
color: ${props => props.theme.color.gun};
line-height: 1.21;
`

export const RadioContainer = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: ${props => props.theme.space[6]}
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;

  margin-right: ${(props) => props.theme.space[6]};
  padding-right: 29px;

  font-size: ${(props) => props.theme.size.N};
  font-weight: ${(props) => props.theme.weight.bold};
  color: ${(props) => props.theme.color.gun};
  line-height: 1.5;

  
`;

export const RadioInput = styled.input`
  width: 31px;
  height: 31px;

  margin-right: 18px;

`;

export const DataContainer = styled.div`
position: relative;

margin-bottom:${props => props.theme.space[4]};
`

export const DataLabel = styled.label`
margin-bottom: ${props => props.theme.space[2]};

  color: ${props => props.theme.color.electric};
  font-size: ${props => props.theme.size.XS};
  line-height: 1.5;
`;

export const DataInput = styled.input`
  width: ${(props) => props.theme.percentage[9]};

  padding-left: ${(props) => props.theme.space[6]};
  padding-bottom: ${(props) => props.theme.space[5]};
  padding-top: ${(props) => props.theme.space[5]};

  font-size: ${(props) => props.theme.size.M};
  font-weight: ${(props) => props.theme.weight.bold};
  color: ${(props) => props.theme.color.gun};
  line-height: 1.21;

  border: 1px solid #d8e2e7;
  border-radius: ${(props) => props.theme.radius[2]};

  &:focus {
    border: 1px solid #345ff6;
  }
`;

export const DataText = styled.span`
position: absolute;
top: 0;
right: 0;

transform: translateX(-24px) translateY(150%);

  font-size: ${(props) => props.theme.size.M};
  font-weight: ${(props) => props.theme.weight.bold};
  color: ${(props) => props.theme.color.blue};
  line-height: 1.21;
`;

export const ResultContainer = styled.div`
  padding-right: ${(props) => props.theme.space[8]};
  padding-left: ${(props) => props.theme.space[8]};
  padding-bottom: ${(props) => props.theme.space[8]};
  padding-top: ${(props) => props.theme.space[8]};

text-align: left;

  background: linear-gradient(90deg, #345ff7 0%, #587dff 100%);
  color: ${(props) => props.theme.color.white};

  border-radius: ${props => props.theme.radius[3]};
`;

export const ResultTitle = styled.h2`
margin-bottom: ${props => props.theme.space[6]};

font-size: ${props => props.theme.size.XXM};
line-height: 1.1;
font-weight: ${props => props.theme.weight.bold};
`

export const ResultText = styled.p`
  font-size: ${(props) => props.theme.size.XS};
  line-height: 1.5;
  font-weight: 700;
`;