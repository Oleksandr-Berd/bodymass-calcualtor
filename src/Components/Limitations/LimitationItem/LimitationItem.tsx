import * as SC from "./LimitationItemStyled"

interface IProps {
    icon: React.ReactElement;
    title: string;
    text: string;
}

const LimitationItem: React.FC<IProps> = ({ title, icon, text }) => {
    return (<SC.Item>
        <SC.IconContainer>
            {icon}
            <SC.Title>{title}</SC.Title>
        </SC.IconContainer>
        <p>{text}</p>
    </SC.Item> );
}
 
export default LimitationItem;