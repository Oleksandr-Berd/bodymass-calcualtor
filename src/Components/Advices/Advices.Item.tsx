import React from "react";

interface IProps {
  icon: React.ReactElement;
  title: string;
  text: string;
}

const AdviceItem: React.FC<IProps> = ({ icon, title, text }) => {
  return (
    <li>
      {icon} 
      <h3>{title}</h3>
      <p>{text}</p>
    </li>
  );
};

export default AdviceItem;
