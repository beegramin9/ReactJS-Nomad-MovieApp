import styled from 'styled-components'

export const Section = styled.section`
    display: ${(props) => props.grid? "grid":"column"};
    /* grid-template-columns: 1fr 1fr;
    grid-auto-rows: 200px;
    grid-template-rows: 200px; */
    flex-direction: ${(props) => props.row? "row": "column"};
    padding: ${(props) => props.nopadding? "0" : "32px 48px 0"};
    margin: 0 auto;
    max-width: 1200px;
    max-height: 80vh;
    grid-gap: 5em;
`

export const MainCardSection = styled.section`
`

export const MovieListSection = styled.section`
    grid-area: 1 / 1 / 3 / 3;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5em;
   
`

export const PaginationSection = styled.section`
    grid-area: 3 / 2 / 4 / 3;
`