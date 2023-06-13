import React from "react";

import * as SC from "./AdvicesStyled"

interface IProps {
  icon: React.ReactElement;
  title: string;
  text: string;
}

const AdviceItem: React.FC<IProps> = ({ icon, title, text }) => {
  return (
    <SC.Item>
      {icon} 
      <SC.TextContainer>
      <SC.Title>{title}</SC.Title>
        <SC.Text>{text}</SC.Text>
      </SC.TextContainer>
    </SC.Item>
  );
};

export default AdviceItem;
