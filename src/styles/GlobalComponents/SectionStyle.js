import styled from 'styled-components'

export const Section = styled.section`
    display: ${(props) => props.grid? "grid":"column"};
    grid-template-columns: 1fr 1fr;
    flex-direction: ${(props) => props.row? "row": "column"};
    padding: ${(props) => props.nopadding? "0" : "32px 48px 0"};
    margin: 0 auto;
    max-width: 520px;
    grid-gap: 5em
`