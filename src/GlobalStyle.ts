import {createGlobalStyle} from 'styled-components'

 const GlobalStyle = createGlobalStyle`
 
    *{
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
        font-family: 'Roboto';
    }

    body{
        background-color: ${props => props.theme.colors.background}
    }


`

export default GlobalStyle