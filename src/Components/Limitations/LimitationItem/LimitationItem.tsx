
interface IProps {
    icon: React.ReactElement;
    title: string;
    text: string;
}

const LimitationItem: React.FC<IProps> = ({ title, icon, text }) => {
    return (<li>
        <div>
            {icon}
            <h3>{title}</h3>
        </div>
        <p>{text}</p>
    </li> );
}
 
export default LimitationItem;