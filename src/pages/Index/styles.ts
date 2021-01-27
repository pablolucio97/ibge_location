import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    width: 100%;
    min-width: 460px;
    height: 100vh;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

export const SubmitContainer = styled.div`
    display: flex;  
    flex-direction: column;
    width: 800px;
    margin-top: 5rem;
    justify-content: center;
    align-items: center;
    text-align: center;

    
    h1, h4{
        margin: 1rem;
        color: ${props => props.theme.colors.text};
        letter-spacing: .2rem;
    }

    p{
        margin-top: .5rem
    }

    select{
        width: 12rem;
        height: 2rem;
        margin: 1rem;
    }

    button{
        width: 8rem;
        height: 1.85rem;
        margin: 1rem;
        border: none;
        outline: .1rem solid #555;
        transition: .2s;

        &:hover{
            box-shadow: 0 0  .2rem .05rem ${props => props.theme.colors.text}
        }
    }
`

export const InfoContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    text-align: center;
    margin-top: 2rem;

    p{
        color: ${props => props.theme.colors.text}
    }


`
export const Img = styled.img`
    width: 55%;
    max-width: 55rem;
    min-width: 55rem;
    height: 35vh;
    align-self: center;
    margin: 2rem;
`

export const Header = styled.header`
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    background-color: #6ba32f;

    h1{
        margin: 2rem;
        background-color: #6ba32f;
        color: #ddd;
    }
`


