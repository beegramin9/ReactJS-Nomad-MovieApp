import styled from 'styled-components'

export const Section = styled.section`
    display: ${(props) => props.grid? "grid":"flex"};
    flex-direction: ${(props) => props.row? "row": "column"};
    padding: ${(props) => props.nopadding? "0" : "2rem 3rem 0"};
    justify-content: center;
    margin: 0 auto;
    max-width: 1200px;
    grid-gap: 5em;
    @media ${(props) => props.theme.breakpoints.sm} {
        padding: 2rem 0 0;
    }
`

export const MainCardSection = styled.section`
    display: flex;
    grid-gap: 1em;
    background-color: rgba(84, 86, 90, .45);
    padding: 2em;

    margin: 0 auto 1em;
    border-radius: 15px;
    box-shadow: 0 13px 27px -5px rgba(0, 0, 0, 0.65),
    0 8px 16px -8px rgba(0, 0, 0, 0.6), 0 -6px 16px -6px rgba(0, 0, 0, .625);
    @media ${(props) => props.theme.breakpoints.sm} {
        flex-direction: column;
        align-content: content;
        width: 25rem;
        padding: 0 2px;
    }
   
`
export const IntroductionSection = styled.section`
    flex: 30%;
    display: flex;
    flex-direction: column;
    color: rgb(247 ,247 ,232);
    border-right: 2px solid rgba(247 ,247 ,232, .6);
    padding: 1em;
    @media ${(props) => props.theme.breakpoints.sm} {
        display: flex;
        flex-direction: row;
        border-right: 0px;
        border-bottom: 2px solid rgba(247 ,247 ,232, .6);
        gap: 1rem;
    }
`

export const ProfileImageSection = styled.div`
    flex: 3.5;
    text-align: center;
    @media ${(props) => props.theme.breakpoints.sm} {
        flex: 1;
    }
`
export const ProfileTextSection= styled.div`
    flex: 6.5;
    display: flex;
    flex-direction: column;
    @media ${(props) => props.theme.breakpoints.sm} {
        flex: 2;
    }
`
export const ProfileTextTitle= styled.div`
    flex: 3;
    text-align: center;
    font-size: 3em;
    font-weight: bold;
`
export const ProfileTextContent= styled.div`
    flex: 7;
    margin-top: 1em;
    font-size: 1.5em;
    @media ${(props) => props.theme.breakpoints.sm} {
        display: none;
    }
`

export const MovieSection = styled.section`
    position: relative;
    flex: 70%;
    display: flex;
    flex-direction: column;
    align-content: center;
    padding: 1em;
    @media ${(props) => props.theme.breakpoints.sm} {
        position: static;
        display: flex;
        align-content: center;
        justify-content: center;
        grid-gap: .3em;
    }
`

export const MovieListSection = styled.section`
    flex: 95%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5em;

    /* responsive 시작! */
    @media ${(props) => props.theme.breakpoints.md} {
        display: flex;
        flex-direction: column;
        margin: auto;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        padding-top: .5rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
`


export const PaginationSection = styled.section`
    flex: 5%;
    display: flex;
    justify-content: flex-end;
    padding-top: 2em;

    @media ${(props) => props.theme.breakpoints.md} {
        padding: 2em 2rem 0 0;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        padding: 2em 3rem 0 0;
        display: flex;
        justify-content: center;
    }
`