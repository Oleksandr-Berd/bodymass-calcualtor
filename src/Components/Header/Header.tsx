import { useMediaQuery } from "@mui/material";

import { ReactComponent as LogoSvg } from "assets/images/logo.svg"
import * as SC from "./HeaderStyled"

const Header: React.FC = () =>
    
 { const isDesktop = useMediaQuery('(min-width:1440px)');


    return (<SC.Container>
    <SC.Header>
            {isDesktop ? <LogoSvg width={64} height={64}/> : <LogoSvg width={40} />}
        
        <SC.TextContainer>
        <SC.Title>Body Mass
            Index Calculator</SC.Title>
            <SC.Text>Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.</SC.Text>
        </SC.TextContainer>
    </SC.Header>
</SC.Container>
)}

export default Header;