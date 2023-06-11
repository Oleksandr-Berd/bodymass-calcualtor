import * as SC from "./LimitationsTitleStyled"

const LimitationsTitle: React.FC = () => {
    return (<SC.Container>
        <SC.Title>Limitations of BMI</SC.Title>
        <SC.Text>Although BMI is often a practical indicator of healthy weight,
            it is not suited for every person. Specific groups should carefully consider their BMI outcomes,
            and in certain cases, the measurement may not be beneficial to use.</SC.Text>
    </SC.Container>);
}

export default LimitationsTitle;