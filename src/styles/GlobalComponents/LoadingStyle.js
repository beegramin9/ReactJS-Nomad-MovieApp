import styled from 'styled-components'

export const LoadingWrapper = styled.div`
    /* MovieCardSection에서 */
    flex: 7;
    display: grid;
    min-width: 40em;
    min-height: 58.5em;
    justify-content: center;
    align-content: center;
    @media ${(props) => props.theme.breakpoints.sm} {
        display: flex;
        flex-direction: row;
        min-height: 30em;
        justify-content: center;
        align-self: center;
    }
`