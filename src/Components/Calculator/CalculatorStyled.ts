import styled from "styled-components"

interface IProps{
    text?: "main";
    image?: string;
}

export const FormContainer = styled.div`
  padding-right: ${(props) => props.theme.space[6]};
  padding-left: ${(props) => props.theme.space[6]};

  background-color: ${(props) => props.theme.color.background}
`;

export const CustomForm = styled.form`
  transform: translateY(-172px);
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
position: relative;

  display: flex;
  align-items: center;

  margin-right: ${(props) => props.theme.space[6]};
  padding-right: 29px;

  font-size: ${(props) => props.theme.size.N};
  font-weight: ${(props) => props.theme.weight.bold};
  color: ${(props) => props.theme.color.gun};
  line-height: 1.5;

  &:hover,
  &:focus {
    cursor: pointer;
  }
  &:hover > div {
    border: 1px solid #345ff6;
  }

 
`;

export const RadioInput = styled.input<IProps>`
z-index: 10;

  width: 31px;
  height: 31px;

  margin-right: 18px;
  opacity: 0;

  &:checked + div {
    width: 15px;
    height: 15px;
    background-size: 15px 15px;
    background-color:rgba(52, 95, 246, 1);

    border: 8px solid rgba(216, 226, 231, 1);
  }
`;

export const CustomRadio = styled.div<IProps>`
position: absolute;
top:3px;
left: 5px;

  width: 31px;
  height: 31px;

  border: 1px solid #d8e2e7;
  border-radius: ${(props) => props.theme.radius[5]};
`;

export const DataContainer = styled.div`
  position: relative;

  margin-bottom: ${(props) => props.theme.space[4]};
`;

export const DataLabel = styled.label`
  margin-bottom: ${(props) => props.theme.space[2]};

  color: ${(props) => props.theme.color.electric};
  font-size: ${(props) => props.theme.size.XS};
  line-height: 1.5;
`;

export const DataInput = styled.input`
  width: ${(props) =>
    props.theme.percentage[9]};

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
  font-weight: 400;
`;

export const DataInputContainer = styled.div`
display: flex;
flex-direction: row;
`;

//Imperial

export const ImperialDataContainer = styled.div`
display: flex;
flex-direction: column;

margin-bottom: ${props => props.theme.space[6]};
`

export const InputContainer = styled.div`
position: relative;

display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

&:not(:last-child){
    margin-bottom:${props => props.theme.space[4]}
}
`

export const FlexElement = styled.div`
margin-right: ${props => props.theme.space[4]};
`

export const ImperialInput = styled.input`
  width:${props => props.theme.percentage[8]};

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

export const ImperialDataText = styled.span<IProps>`
  position: absolute;
  top: 0;
  right: 0;
left:${props => props.text === "main" && 0};
  transform: ${props => props.text === "main" ? "translateX(100px) translateY(80%)" : "translateX(-24px) translateY(80%)"};

  font-size: ${(props) => props.theme.size.M};
  font-weight: ${(props) => props.theme.weight.bold};
  color: ${(props) => props.theme.color.blue};
  line-height: 1.21;
`;

