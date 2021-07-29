import styled from "styled-components"

export const HeaderContainer = styled.div`
    display: flex;
    padding: 2rem 1rem 1rem;
    width: 95%;
    height: 2.5rem;
    
    justify-content: space-between;
    align-content: center;
    
    color: rgb(247 ,247 ,232);


    font-family: 'NEXONFootballGothicLA1';

    @font-face {
    font-family: "NEXONFootballGothicLA1";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXONFootballGothicLA1.woff")
        format("woff");
    font-weight: normal;
    font-style: normal;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
    }
`

export const Div1 = styled.div`
    flex: 8;
    display: flex;
    padding: 0 1em;
    font-size: 2em;
`
export const Div2 = styled.div`
    flex: 1;
    display: flex;
    font-size: 1.5em;
    justify-content: space-between;
    position: relative;
    top: .25em;
    gap: 1em;
`

export const Span = styled.span`
    padding-left: .2em;
`