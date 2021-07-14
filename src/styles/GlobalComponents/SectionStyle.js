import styled from 'styled-components'

export const Section = styled.section`
    display: ${(props) => props.grid? "grid":"column"};
    flex-direction: ${(props) => props.row? "row": "column"};
    padding: ${(props) => props.nopadding? "0" : "32px 48px 0"};
    margin: 0 auto;
    max-width: 1200px;
    max-height: 80vh;
    grid-gap: 5em;
`

export const MainCardSection = styled.section`
    display: flex;
    grid-gap: 1em;
    background-color: rgba(84, 86, 90, .45);
    margin-bottom: 1em;
    padding: 2em;
    margin: 0 2em;
    border-radius: 5px;
    box-shadow: 0 13px 27px -5px rgba(0, 0, 0, 0.65),
    0 8px 16px -8px rgba(0, 0, 0, 0.6), 0 -6px 16px -6px rgba(0, 0, 0, .625);
`
export const IntroductionSection = styled.section`
    flex: 30%;
    display: flex;
    flex-direction: column;
    color: rgb(247 ,247 ,232);
    border-right: 2px solid rgba(247 ,247 ,232, .6);
    padding: 1em;
`

export const ProfileImageSection = styled.div`
    flex: 3.5;
    text-align: center;
`
export const ProfileTextSection= styled.div`
    flex: 6.5;
    display: flex;
    flex-direction: column;
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
`

export const MovieListSection = styled.section`
    flex: 95%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5em;
`

export const MovieSection = styled.section`
    position: relative;
    flex: 70%;
    display: flex;
    flex-direction: column;
    padding: 1em;

`

export const PaginationSection = styled.section`
    flex: 5%;
    display: flex;
    justify-self: flex-end;
    padding-top: 2em;
    align-self: flex-end;
`