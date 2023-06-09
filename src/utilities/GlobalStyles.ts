import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: "Inter-Regular";
  src: local("Inter-Regular"),
    url(("assets/fonts/static/Inter-Regular.ttf")) format("truetype");
}

body{
  color: ${(props) => props.theme.color.text};
  font-family: ${props => props.theme.fontFamily.text};
}

h1, h2, h3, h4 , h5 ,h6{
  margin: 0;
}

span, p, a{
  margin: 0;
}

ul, nav{
  padding: 0;
  list-style: none;
}

img{
    display: block;
}
`;
