import styled from 'styled-components'

export const FooterWrapper = styled.section`
    display: flex;
    justify-content: center;
	width: calc(100vw - 96px);
    max-width: 1040px;
    padding: 2rem 48px 40px;
    margin: 3rem auto 1rem;
    box-sizing: content-box;
    @media ${props => props.theme.breakpoints.sm} {
        padding: 0 16px 48px;
        width: calc(100vw - 32px);
    }
`

export const SocialIcons = styled.a`
    transition: 0.3s ease;
    color: white;
    border-radius: 50px;
    padding: 8px;
    &:hover {
        background-color: rgba(34, 34, 34, .7);
        transform: scale(1.2);
        cursor: pointer;
    }
`