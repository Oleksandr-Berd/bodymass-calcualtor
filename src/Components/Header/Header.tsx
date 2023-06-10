import { ReactComponent as LogoSvg } from "assets/images/logo.svg"
import * as SC from "./HeaderStyled"

const Header: React.FC = () =>
    
(<SC.Container>
    <SC.Header>
        <LogoSvg />
        <SC.Title>Body Mass
            Index Calculator</SC.Title>
        <SC.Text>Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.</SC.Text>
    </SC.Header>
</SC.Container>
)

export default Header;