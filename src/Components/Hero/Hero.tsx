import { useMediaQuery } from "@mui/material";
import * as SC from "./HeroStyled"
import heroImage from "assets/images/heroMobile.png"
import heroImageDesktop from "assets/images/heroDesktop.png"

const Hero: React.FC = () => {
    const isDesktop = useMediaQuery('(min-width:1440px)');

    return (
    <SC.HeroContainer>
            <SC.ImageContainer>
                {isDesktop ? <SC.Image src={heroImageDesktop} alt="heroImage" /> : <SC.Image src={heroImage} alt="heroImage" />}
            
        </SC.ImageContainer>
        <SC.TextContainer>
            <SC.Title>What your BMI result means</SC.Title>
            <SC.Text>A BMI range of 18.5 to 24.9 is considered
                a 'healthy weight.' Maintaining a healthy weight may lower your chances of
                experiencing health issues later on, such as obesity and type 2 diabetes.
                Aim for a nutritious diet with reduced fat and sugar content, incorporating ample fruits and vegetables.
                Additionally, strive for regular physical activity, ideally about 30 minutes daily for five days a week.</SC.Text>
        </SC.TextContainer>
    </SC.HeroContainer>
)}

export default Hero;